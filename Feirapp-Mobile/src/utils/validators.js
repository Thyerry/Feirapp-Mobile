let nameIsValid;
let priceIsValid;
let groceryCategoryIsValid;
let brandNameIsValid;
let groceryStoreNameIsValid;
let purchaseDateIsValid;

export const groceryItemValidator = (groceryItemRequestBody, setInput) => {
  nameIsValid = groceryItemRequestBody.name.length > 0;
  priceIsValid = !isNaN(groceryItemRequestBody.price);
  groceryCategoryIsValid = !isNaN(groceryItemRequestBody.groceryCategory);
  brandNameIsValid = groceryItemRequestBody.brandName.length > 0;
  groceryStoreNameIsValid = groceryItemRequestBody.groceryStoreName.length > 0;
  purchaseDateIsValid
    = groceryItemRequestBody.purchaseDate.toString() !== "Invalid Date";

  if (
    !nameIsValid
    || !priceIsValid
    || !groceryCategoryIsValid
    || !brandNameIsValid
    || !groceryStoreNameIsValid
    || !purchaseDateIsValid
  ) {
    setInput(returnUpdatedState.bind(this));
    return true;
  }
  return false;
};

export const returnUpdatedState = (currentInput) => {
  return {
    name: { value: currentInput.name.value, isValid: nameIsValid },
    price: { value: currentInput.price.value, isValid: priceIsValid },
    brandName: {
      value: currentInput.brandName.value,
      isValid: brandNameIsValid,
    },
    groceryCategory: {
      value: currentInput.groceryCategory.value,
      isValid: groceryCategoryIsValid,
    },
    groceryStoreName: {
      value: currentInput.groceryStoreName.value,
      isValid: groceryStoreNameIsValid,
    },
    purchaseDate: {
      value: currentInput.purchaseDate.value,
      isValid: purchaseDateIsValid,
    },
  };
};
