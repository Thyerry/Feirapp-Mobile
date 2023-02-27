import { render, fireEvent } from "@testing-library/react-native";
import GroceryItem from ".";

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      dispatch: jest.fn(),
    }),
  };
});

const groceryItem = {
  name: "PÃO KG",
  price: 11.99,
  groceryCategory: 11,
  brandName: "KARLA",
  groceryStoreName: "EMPÓRIO KARLA",
  purchaseDate: "2022-08-19T15:31:07.205Z",
};

const groceryItemWithoutBrand = {
  name: "PÃO KG",
  price: 11.99,
  groceryCategory: 11,
  brandName: "KAR",
  groceryStoreName: "EMPÓRIO KARLA",
  purchaseDate: "2022-08-19T15:31:07.205Z",
};

describe("<GroceryItem />", () => {
  describe("When it renders", () => {
    it("should show the correct information of the grocery item", () => {
      const { getByTestId } = render(<GroceryItem item={groceryItem} />);

      const expectedName = getByTestId("grocery-item-name").props.children;
      expect(expectedName).toBe(groceryItem.name);

      const expectedStore = getByTestId("grocery-item-store").props.children;
      expect(expectedStore).toBe(`Mercado: ${groceryItem.groceryStoreName}`);

      const expectedPrice = getByTestId("grocery-item-price").props.children;
      expect(expectedPrice).toBe(`R$${groceryItem.price}`);

      const expectedBrand = getByTestId("grocery-item-brand").props.children;
      expect(expectedBrand).toBe(groceryItem.brandName);
    });

    it("should not show the brand of the grocery item, if it has none", () => {
      const { getByTestId } = render(
        <GroceryItem item={groceryItemWithoutBrand} />
      );
      const expectedBrand = getByTestId("grocery-item-brand").props.children;
      expect(expectedBrand).not.toBe(groceryItem.brandName);
    });
  });
  describe("When it is pressed", () => {
    it("should navigate to GroceryItemDetails screen", () => {
      const { getByTestId } = render(<GroceryItem item={groceryItem} />);
      fireEvent(getByTestId("grocery-item-pressable"), "onPress");
      expect(mockNavigate).toHaveBeenCalledWith("GroceryItemDetails", { groceryItem: groceryItem });
    });
  });
});
