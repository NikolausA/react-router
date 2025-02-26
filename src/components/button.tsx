interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className="bg-white p-2 my-4 text-[#202329] rounded-sm cursor-pointer text-xl"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
