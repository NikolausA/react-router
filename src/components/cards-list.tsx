import { Card } from "./card";
import { Link } from "react-router-dom";
import defaultImage from "../assets//rickandmorty_defualt_image_2.jpeg";

interface CardListProps<
  T extends { id: number; name: string; image?: string }
> {
  category: string;
  items: T[];
}

export const CardsList = <
  T extends { id: number; name: string; image?: string }
>({
  category,
  items,
}: CardListProps<T>) => {
  return (
    <div className="grid grid-cols-3 gap-3 pb-4">
      {items.map((item) => (
        <Link key={item.id} to={`/${category}/${item.id}`}>
          <Card
            id={item.id}
            name={item.name}
            image={item.image ?? defaultImage}
          />
        </Link>
      ))}
    </div>
  );
};
