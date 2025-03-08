// import { ReactNode } from "react";
import { InputSize, inputSizes } from "../utils/input-sizes";
import { IconPositon, iconPositions } from "../utils/icon-positions";
import { InputVariant, inputVariants } from "../utils/input-variants";

interface InputProps {
  type: "text" | "password" | "email";
  label?: string;
  icon?: React.ReactNode;
  name: string;
  description?: string;
  size?: InputSize;
  placeholder: string;
  iconPosition?: IconPositon;
  error?: string;
  disabled?: boolean;
  asterisk: boolean;
  variant: InputVariant;
  border: "rounded-lg" | "rounded-xl" | "rounded-2xl";
}

export const Input: React.FC<InputProps> = ({
  type,
  label,
  icon,
  name,
  description,
  size = "md",
  placeholder,
  iconPosition = "left",
  error,
  disabled = false,
  asterisk = false,
  variant = "default",
  border = "rounded-xl",
}) => {
  return (
    <div className={`flex flex-col items-start mt-2 ${inputSizes[size]}`}>
      <label
        className="inline-block text-base font-medium text-inherit"
        htmlFor={label}
      >
        {label}
        {asterisk && <span className="text-sm text-yellow-400">*</span>}
      </label>
      {description && (
        <span className="text-sm text-inherit">{description}</span>
      )}
      <div className={`w-full relative ${inputSizes[size]}`}>
        {icon && (
          <div
            className={`absolute text-gray-600 text-base w-5 h-5 ${iconPositions[iconPosition]}`}
          >
            {icon}
          </div>
        )}
        <input
          id={label}
          className={`text-[size:inherit] m-0 py-3 px-8 w-full color-[#344054] disabled:bg-[#c7cacc] disabled:cursor-not-allowed ${border} ${
            inputVariants[variant]
          } ${
            icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : "px-8"
          } placeholder:text-gray-600`}
          name={name}
          type={type}
          placeholder={disabled ? "disabled" : placeholder}
          disabled={disabled}
        />
      </div>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};
