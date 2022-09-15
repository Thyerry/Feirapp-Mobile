import * as validators from "./validators";

const groceryItemProps = {
  id: {
    value: "id",
    isValid: true,
  },
  name: {
    value: "values.name",
    isValid: true,
  },
  price: {
    value: 0,
    isValid: true,
  },
  groceryCategory: {
    value: 0,
    isValid: true,
  },
  brandName: {
    value: "values.brandName",
    isValid: true,
  },
  groceryStoreName: {
    value: "values.groceryStoreName",
    isValid: true,
  },
  purchaseDate: {
    value: new Date(),
    isValid: true,
  },
};

describe("validators.js", () => {
  describe("When invoking with valid request body", () => {
    it("it should return false", () => {
      const setInput = jest.fn();
      const groceryItemRequestBody = {
        id: "id",
        name: "name",
        price: 0,
        groceryCategory: 0,
        brandName: "brandName",
        groceryStoreName: "groceryStoreName",
        purchaseDate: new Date(),
      };

      const result = validators.groceryItemValidator(
        groceryItemRequestBody,
        setInput
      );

      expect(result).toBe(false);
    });
  });
  describe("When invoking with a invalid request body", () => {
    const setInput = jest.fn();
    const groceryItemRequestBody = {
      id: "id",
      name: "",
      price: "price",
      groceryCategory: "groceryCategory",
      brandName: "brandName",
      groceryStoreName: "groceryStoreName",
      purchaseDate: "purchaseDate",
    };
    it("it should return true", () => {
      const result = validators.groceryItemValidator(
        groceryItemRequestBody,
        setInput
      );
      expect(result).toBe(true);
    });
    it("it should return the expected object", () => {
      const result = validators.returnUpdatedState(groceryItemProps);
      expect(result.name.value).toBe(groceryItemProps.name.value);
      expect(result.name.isValid).toBe(false);
    });
  });
});
