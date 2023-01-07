import { render, screen } from "@testing-library/react-native";
import GroceryItemDetails from ".";

describe("<GroceryItemDetails />", () => {
  describe("When it renders", () => {
    beforeEach(() =>
      render(<GroceryItemDetails route={{ item: { name: "test" } }} />)
    );
    it("it shouldn't crash", () => {
      expect(screen.getByTestId("grocery-item-details-container"));
    });
  });
});
