interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card = ({ name, image }: CardProps) => {
  return (
    <div className="bg-[#3c3e44] text-white rounded-lg flex justify-between overflow-hidden">
      <div className="size-40">
        <img className="size-full" src={image} alt={name} />
      </div>
      <div className="max-w-1/2 p-2">
        <h3 className="text-2xl text-center">{name}</h3>
      </div>
    </div>
  );
};
