import { useParams } from "react-router-dom";
import { isValidCategory } from "../utils/isValidCategory";

type CategoryType = "character" | "episode" | "location";

export const useCategoryParam = (): CategoryType | null => {
  const { categoryName } = useParams<{ categoryName: string }>();

  if (categoryName && isValidCategory(categoryName)) {
    return categoryName;
  }

  return null;
};
