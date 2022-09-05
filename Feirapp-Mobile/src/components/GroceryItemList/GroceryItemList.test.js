import { render, screen } from "@testing-library/react-native";
import { act } from "react-test-renderer";

import GroceryItemList from ".";

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

const groceryItemList = [
  {
    id: "62ffc488be7cb72edb852786",
    name: "ÁGUA 20L",
    price: 6.5,
    groceryCategory: 1,
    brandName: "CRISTALINA",
    groceryStoreName: "ED AGUA",
    purchaseDate: "2022-07-30T03:00:00Z",
    groceryImageUrl: null,
    priceHistory: [{ price: 6.5, logDate: "2022-07-30T03:00:00Z" }],
  },
  {
    id: "62ffacf0be7cb72edb852784",
    name: "PÃO KG",
    price: 11.99,
    groceryCategory: 11,
    brandName: "",
    groceryStoreName: "EMPÓRIO KARLA",
    purchaseDate: "2022-08-19T15:31:07.205Z",
    groceryImageUrl: null,
    priceHistory: [{ price: 11.99, logDate: "2022-08-19T15:31:07.205Z" }],
  },
  {
    id: "62ffc6f0be7cb72edb852788",
    name: "BIFE CHÃ DE FORA",
    price: 47,
    groceryCategory: 2,
    brandName: "MASTER BOI",
    groceryStoreName: "NOVO ATACAREJO - JANGA",
    purchaseDate: "2022-08-08T03:00:00Z",
    groceryImageUrl: null,
    priceHistory: [{ price: 47, logDate: "2022-08-08T03:00:00Z" }],
  },
];

const mockRefresh = jest.fn();
const onRefresh = () => {
  mockRefresh();
};

describe("<GroceryItemList />", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(<GroceryItemList list={groceryItemList} />);
    });
    it("it should render without crash", () => {
      expect(screen.getByTestId("grocery-item-list"));
    });
    it("it should show the list container", () => {
      expect(screen.getAllByTestId("grocery-item").length).toBe(
        groceryItemList.length
      );
    });
  });
  describe("When refresh the list", () => {
    it("it should call onRefresh function", async () => {
      const component = render(
        <GroceryItemList list={groceryItemList} onRefresh={onRefresh} />
      );

      const flatList = component.getByTestId("grocery-item-list");
      expect(flatList).toBeDefined();

      const { refreshControl } = flatList.props;

      await act(async () => refreshControl.props.onRefresh());
    });
  });
});
