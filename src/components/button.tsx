interface ButtonProps {
  type: "submit" | "reset" | "button";
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className="bg-white p-2 my-4 text-[#202329] rounded-sm cursor-pointer text-lg uppercase font-medium hover:bg-gray-200"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
