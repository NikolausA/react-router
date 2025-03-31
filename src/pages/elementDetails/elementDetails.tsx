import { useParams, useLocation } from "react-router-dom";
import {
  CharacterDetails,
  EpisodeDetails,
  LocationDetails,
} from "../../entities";
import { Character, Episode, Location } from "../../types";
import styles from "./elementDetails.module.css";

type CategoryNameType = "character" | "episode" | "location";

export const Element = () => {
  const { categoryName } = useParams<{ categoryName: CategoryNameType }>();
  const location = useLocation();
  const { state } = location;

  return (
    <div className={styles.container}>
      {categoryName === "character" && (
        <CharacterDetails {...(state as Character)} />
      )}
      {categoryName === "episode" && <EpisodeDetails {...(state as Episode)} />}
      {categoryName === "location" && (
        <LocationDetails {...(state as Location)} />
      )}
    </div>
  );
};
