export const inputVariants = {
  default:
    "text-[#344054] bg-white border border-gray-400 focus:outline-3 focus:outline-white",
  filled: "bg-[#f1f3f5] border-none focus:outline-1 focus:outline-blue",
  unstyled: "bg-[color:inherit] border-none outline-hidden",
};

export type InputVariant = keyof typeof inputVariants;
