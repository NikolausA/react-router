import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../constants";
import { CategoryData, Character, Episode, Location } from "../types";
import { isValidCategory } from "../utils/isValidCategory";

type Item = Character | Episode | Location;

export const useGetCategoryInfinitively = (
  categoryName: string | "",
  pageNumber: number
) => {
  const [categoryData, setCategoryData] = useState<CategoryData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!isValidCategory(categoryName)) {
      setLoading(false);
      setError(true);
      return;
    }

    if (pageNumber === 1) {
      setCategoryData([]);
    }
    let cancel: (message?: string) => void;

    axios({
      method: "GET",
      url: `${API}${categoryName}`,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (!res.data.results || res.data.results.length === 0) {
          setHasMore(false);
          setLoading(false);
          return;
        }
        setCategoryData((prev) => {
          const newData = res.data.results.filter(
            (newItem: Item) =>
              !prev.some((prevItem) => prevItem.id === newItem.id)
          );
          return [...prev, ...newData];
        });
        setHasMore(pageNumber < res.data.info.pages);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("Запрос отменен:", e.message);
          return;
        }
        setError(true);
        setHasMore(false);
        console.error(e);
      });

    return () => {
      if (cancel) {
        cancel("Запрос отменен из-за изменения параметров");
      }
    };
  }, [categoryName, pageNumber]);

  return { categoryData, loading, error, hasMore };
};
