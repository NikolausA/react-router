import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import { CardsList } from "../../components/cards-list";
import { Character, Episode, Location } from "../../types";

const validCategories = ["characters", "episodes", "locations"] as const;
type CategoryType = (typeof validCategories)[number];

export const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const context = useContext(AppContext);

  if (!category || !validCategories.includes(category as CategoryType)) {
    navigate("*");
    return null;
  }
  if (!context) return <div>Loading...</div>;

  let items: Character[] | Episode[] | Location[] = [];

  switch (category) {
    case "characters":
      items = context.characters as Character[];
      break;
    case "episodes":
      items = context.episodes as Episode[];
      break;
    case "locations":
      items = context.locations as Location[];
      break;
  }

  return (
    <div>
      <h1 className="text-3xl uppercase font-black my-3">{category}</h1>
      {category === "characters" && (
        <CardsList<Character>
          category={category}
          items={items as Character[]}
        />
      )}
      {category === "episodes" && (
        <CardsList<Episode> category={category} items={items as Episode[]} />
      )}
      {category === "locations" && (
        <CardsList<Location> category={category} items={items as Location[]} />
      )}

      {/* <Outlet /> */}
    </div>
  );
};
