import { createContext } from "react";
import { Character, Episode, Location } from "./types";

type Context = {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
};

export const AppContext = createContext<Context | null>(null);
