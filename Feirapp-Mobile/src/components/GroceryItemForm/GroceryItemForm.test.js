import { render, screen } from "@testing-library/react-native";
import GroceryItemForm from ".";

describe("<GroceryItemForm />", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(<GroceryItemForm onSubmit={() => {}} />);
    });
    it("it should render", () => {
      expect(screen.getByTestId("grocery-item-form-container"));
    });
  });
});
