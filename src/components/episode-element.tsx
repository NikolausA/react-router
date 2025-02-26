import { Episode } from "../types/episode";
import { createLocalDate } from "../utils/create-local-date";

export const EpisodeElement = (props: Episode) => {
  return (
    <div className="p-3 text-white">
      <h2 className="font-bold text-4xl">{props.name}</h2>
      <p className=" font-bold text-2xl">episode: {props.episode}</p>
      <p className=" font-bold text-2xl">
        air date: {createLocalDate(props.air_date)}
      </p>
      <p className=" font-bold text-2xl">
        created: {createLocalDate(props.created)}
      </p>
    </div>
  );
};
