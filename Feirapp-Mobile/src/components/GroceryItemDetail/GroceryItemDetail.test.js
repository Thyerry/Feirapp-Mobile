import { render } from "@testing-library/react-native";
import GroceryItemDetail from ".";

const groceryItemDetailProps = {
  title: "title",
  value: "value",
};

describe("<GroceryItemDetail />", () => {
  describe("When it renders", () => {
    it("should display the title and the value of the grocery item detail ", () => {
      const { getByTestId } = render(
        <GroceryItemDetail {...groceryItemDetailProps} />
      );

      const title = getByTestId("grocery-item-detail-title").props.children;
      expect(title).toBe(groceryItemDetailProps.title);
      
      const value = getByTestId("grocery-item-detail-value").props.children;
      expect(value).toBe(groceryItemDetailProps.value);
    });
  });
});
