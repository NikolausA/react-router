import styles from "./cardsList.module.css";
import { Card } from "../";
import { Link } from "react-router-dom";
import { useRef, useCallback } from "react";
import defaultImage from "../../assets/rickandmorty_defualt_image_2.jpeg";

interface CardsListProps<
  T extends { id: number; name: string; image?: string }
> {
  category: string;
  items: T[];
  loading: boolean;
  hasMore: boolean;
  setPageNumber: (pageNumber: number | ((prev: number) => number)) => void;
}
export const CardsList = <
  T extends { id: number; name: string; image?: string }
>({
  category,
  items,
  setPageNumber,
  loading,
  hasMore,
}: CardsListProps<T>) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <Link key={item.id} to={`/${category}/${item.id}`} state={item}>
          {items.length === index + 1 ? (
            <div ref={lastNodeRef}>
              <Card
                id={item.id}
                name={item.name}
                image={item.image ?? defaultImage}
              />
            </div>
          ) : (
            <Card
              id={item.id}
              name={item.name}
              image={item.image ?? defaultImage}
            />
          )}
        </Link>
      ))}
    </div>
  );
};
