import { Location } from "../types/location";
import { createLocalDate } from "../utils/create-local-date";

export const LocationElement = (props: Location) => {
  return (
    <div className="p-3 text-white">
      <h2 className="font-bold text-4xl">{props.name}</h2>
      <p className=" font-bold text-2xl">type: {props.type}</p>
      <p className=" font-bold text-2xl">dimension: {props.dimension}</p>
      <p className=" font-bold text-2xl">
        created: {createLocalDate(props.created)}
      </p>
    </div>
  );
};
