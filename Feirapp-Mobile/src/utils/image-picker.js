import { GroceryItemCategory } from "../constants/grocery-categories";

export const imagePicker = (imageUrl, categoryId) => {
  if (imageUrl) return imageUrl;
  return GroceryItemCategory.find((c) => c.id === categoryId).defaultImageUrl;
};
