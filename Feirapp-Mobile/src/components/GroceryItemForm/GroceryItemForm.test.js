import { fireEvent, render, screen } from "@testing-library/react-native";

import * as validators from "../../utils/validators";
import * as helpers from "./helpers";
import GroceryItemForm from ".";

describe("<GroceryItemForm />", () => {
  describe("When it renders", () => {
    describe("with no values", () => {
      beforeEach(() => {
        render(<GroceryItemForm onSubmit={() => {}} />);
      });
      it("it should render", () => {
        expect(screen.getByTestId("grocery-item-form-container"));
      });
      it("it should render all the inputs", () => {
        expect(screen.getAllByTestId("input-container").length).toBe(6);
      });
      it("it should render the submit button", () => {
        expect(screen.getByTestId("button-pressable"));
      });
    });
    describe("with values", () => {
      const values = {
        name: "Test",
        price: 10,
        groceryCategory: 1,
        brandName: "Brand Name",
        groceryStoreName: "Store Name",
        purchaseDate: new Date(1111, 1, 1),
      };
      beforeEach(() =>
        render(<GroceryItemForm onSubmit={() => {}} defaultValues={values} />)
      );
      it("it should render the TextInputs with correct values", () => {
        const result = screen.getAllByTestId("text-input");
        expect(result[0].props.value).toBe(values.name);
        expect(result[1].props.value).toBe(values.brandName);
        expect(result[2].props.value).toBe(values.groceryStoreName);
      });
      it("it should render the CurrencyInput with the correct value", () => {
        const component = screen.getByTestId("numeric-input");
        const value = component.props.value.split("$")[1];
        const result = parseFloat(value.replace(",", "."));
        expect(result).toBe(values.price);
      });
    });
  });
  describe("When the submit button is pressed", () => {
    it("it should call the onSubmit callback", () => {
      const mockOnSubmit = jest.fn();
      jest
        .spyOn(validators, "groceryItemValidator")
        .mockImplementation(() => false);
      const { getByTestId } = render(
        <GroceryItemForm onSubmit={mockOnSubmit} />
      );
      fireEvent(getByTestId("button-pressable"), "onPress");
      expect(mockOnSubmit).toHaveBeenCalled();
    });
    it("it should call the onSubmit w", () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId } = render(
        <GroceryItemForm onSubmit={mockOnSubmit} />
      );
      jest
        .spyOn(validators, "groceryItemValidator")
        .mockImplementation(() => true);
      fireEvent(getByTestId("button-pressable"), "onPress");
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });
});

describe("helpers.js", () => {
  describe("When invoked inputChange", () => {
    it("it should set a value", () => {
      const setInput = jest.fn();
      helpers.setValues(setInput);
      helpers.inputChange("name", "test name");
      expect(setInput).toHaveBeenCalled();
    });
  });
  describe("When invoked returnUpdatedState", () => {
    it("it should set a value", () => {
      const currentValues = { name: "" };
      const setInput = jest.fn();
      helpers.setValues(setInput);
      helpers.inputChange("name", "test name");
      const result = helpers.returnUpdatedState(currentValues);
      expect(result.name.value).toBe("test name");
    });
  });
});
