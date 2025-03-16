const validCategories = ["character", "episode", "location"] as const;
type CategoryType = (typeof validCategories)[number];

export const isValidCategory = (
  category: string | null
): category is CategoryType => {
  return validCategories.includes(category as CategoryType);
};
