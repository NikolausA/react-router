import { Card } from "./card";
import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../assets//rickandmorty_defualt_image_2.jpeg";

interface CardListProps<
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
}: CardListProps<T>) => {
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
    <div className="grid grid-cols-3 gap-3 pb-4">
      {items.map((item, index) => (
        <Link key={item.id} to={`/${category}/${item.id}`}>
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
