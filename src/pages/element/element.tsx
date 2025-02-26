import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { CharacterElement } from "../../components/character-element";
import { EpisodeElement } from "../../components/episode-element";
import { LocationElement } from "../../components/location-element";
import { Character, Episode, Location } from "../../types";

const validCategories = ["characters", "episodes", "locations"] as const;
type CategoryType = (typeof validCategories)[number];

export const Element = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!category || !validCategories.includes(category as CategoryType)) {
    navigate("*");
    return null;
  }
  if (context) {
    const elements = context[category as CategoryType];
    const element = elements.find((item) => item.id === Number(id));

    if (!element) {
      navigate("*");
      return null;
    }

    return (
      <div className="my-0 mx-auto w-4/5 rounded-md bg-[#3c3e44]">
        {category === "characters" && (
          <CharacterElement {...(element as Character)} />
        )}
        {category === "episodes" && (
          <EpisodeElement {...(element as Episode)} />
        )}
        {category === "locations" && (
          <LocationElement {...(element as Location)} />
        )}
      </div>
    );
  }
};
