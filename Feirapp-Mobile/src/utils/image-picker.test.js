import { imagePicker } from "./image-picker";
import { GroceryItemCategory } from "../constants/grocery-categories";

const mockGroceryItem = {
  imageUrl: "url",
  groceryCategory: 5,
};

describe("imagePicker", () => {
  describe("When invoked with a image url", () => {
    it("should return the image url", () => {
      const received = imagePicker(
        mockGroceryItem.imageUrl,
        mockGroceryItem.groceryCategory
      );
      expect(received).toBe(received);
    });
  });

  describe("When invoked without a image url", () => {
    it("should return the default image url for its category", () => {
      const expected = GroceryItemCategory.find(
        (c) => c.id === mockGroceryItem.groceryCategory
      ).defaultImageUrl;
      const received = imagePicker(undefined, mockGroceryItem.groceryCategory);

      expect(received).toBe(expected);
    });
  });
});
