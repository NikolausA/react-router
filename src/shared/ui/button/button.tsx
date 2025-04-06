import styles from "./button.module.css";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
