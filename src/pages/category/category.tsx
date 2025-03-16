import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { CardsList } from "../../components/cards-list";
import { Button } from "../../components/button";
import { Character, Episode, Location, CategoryData } from "../../types";
import { useGetCategoryInfinitively } from "../../hooks/useGetCategoryInfinitively";
import { useCategoryParam } from "../../hooks/useCategoryParam";

type SortValue = "ASC" | "DESC";

export const Category = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortParams, setSortParams] = useSearchParams({ createdSortBy: "ASC" });
  const categoryName = useCategoryParam();

  useEffect(() => {
    setPageNumber(1);
  }, [categoryName]);

  const dataFromHook = useGetCategoryInfinitively(
    categoryName || "",
    pageNumber
  );

  if (!dataFromHook) {
    return <Navigate to="/" />;
  }

  const { categoryData, loading, error, hasMore } = dataFromHook;

  const handleClick = () => {
    const currentSort = (sortParams.get("createdSortBy") as SortValue) || "ASC";
    const newSort: SortValue = currentSort === "ASC" ? "DESC" : "ASC";
    setSortParams({ createdSortBy: newSort });
  };

  const sort = (sortParams.get("createdSortBy") as SortValue) || "ASC";

  let items: CategoryData = [];

  switch (categoryName) {
    case "character":
      items = categoryData as Character[];
      break;
    case "episode":
      items = categoryData as Episode[];
      break;
    case "location":
      items = categoryData as Location[];
      break;
  }

  items.sort((a, b) =>
    sort === "ASC"
      ? new Date(a.created).getTime() - new Date(b.created).getTime()
      : new Date(b.created).getTime() - new Date(a.created).getTime()
  );

  return (
    <div>
      <h1 className="text-3xl uppercase font-black my-3">{categoryName}</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <Button onClick={handleClick}>
        {`Сортировать элементы по ${sort === "ASC" ? "возрастанию" : "убыванию"}
        даты создания`}
      </Button>
      {categoryName === "character" && (
        <CardsList<Character>
          category={categoryName}
          items={items as Character[]}
          setPageNumber={setPageNumber}
          loading={loading}
          hasMore={hasMore}
        />
      )}
      {categoryName === "episode" && (
        <CardsList<Episode>
          category={categoryName}
          items={items as Episode[]}
          setPageNumber={setPageNumber}
          loading={loading}
          hasMore={hasMore}
        />
      )}
      {categoryName === "location" && (
        <CardsList<Location>
          category={categoryName}
          items={items as Location[]}
          setPageNumber={setPageNumber}
          loading={loading}
          hasMore={hasMore}
        />
      )}
    </div>
  );
};
