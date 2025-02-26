import { useContext } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../../context";
import { CardsList } from "../../components/cards-list";
import { Button } from "../../components/button";
import { Character, Episode, Location } from "../../types";

const validCategories = ["characters", "episodes", "locations"] as const;
type CategoryType = (typeof validCategories)[number];
const sortValues = ["ASC", "DESC"] as const;
type SortValue = (typeof sortValues)[number];

export const Category = () => {
  const [sortParams, setSortParams] = useSearchParams({ createdSortBy: "ASC" });
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const context = useContext(AppContext);
  const handleClick = () => {
    const currentSort = (sortParams.get("createdSortBy") as SortValue) || "ASC";
    const newSort: SortValue = currentSort === "ASC" ? "DESC" : "ASC";
    setSortParams({ createdSortBy: newSort });
  };

  const sort = (sortParams.get("createdSortBy") as SortValue) || "ASC";

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

  items.sort((a, b) =>
    sort === "ASC"
      ? new Date(a.created).getTime() - new Date(b.created).getTime()
      : new Date(b.created).getTime() - new Date(a.created).getTime()
  );

  return (
    <div>
      <h1 className="text-3xl uppercase font-black my-3">{category}</h1>
      <Button onClick={handleClick}>
        {`Сортировать элементы по ${sort === "ASC" ? "возрастанию" : "убыванию"}
        даты создания`}
      </Button>
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
    </div>
  );
};
