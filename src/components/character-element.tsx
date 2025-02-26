import { Character } from "../types/characters";
import { createLocalDate } from "../utils/create-local-date";

export const CharacterElement = (props: Character) => {
  return (
    <div className="flex justify-around p-3 text-white">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl">{props.name}</h2>
        <p className=" font-bold text-2xl">
          species:
          {props.species}
        </p>
        <p className=" font-bold text-2xl">
          type:
          {props.type || "Unknown"}
        </p>
        <p className=" font-bold text-2xl">
          status:
          {props.status}
        </p>
        <p className=" font-bold text-2xl">
          gender:
          {props.gender}
        </p>
        <p className=" font-bold text-2xl">
          created:
          {createLocalDate(props.created)}
        </p>
      </div>
    </div>
  );
};
