export const groceryItemValidator = (groceryItemRequestBody, setInput) => {
  const nameIsValid = groceryItemRequestBody.name.length > 0;
  const priceIsValid = !isNaN(groceryItemRequestBody.price);
  const groceryCategoryIsValid = !isNaN(groceryItemRequestBody.groceryCategory);
  const brandNameIsValid = groceryItemRequestBody.brandName.length > 0;
  const groceryStoreNameIsValid =
    groceryItemRequestBody.groceryStoreName.length > 0;
  const purchaseDateIsValid =
    groceryItemRequestBody.purchaseDate.toString() !== "Invalid Date";

  console.log(groceryItemRequestBody.groceryStoreName);
  console.log(`name ${nameIsValid}`);
  console.log(`price ${priceIsValid}`);
  console.log(`groeryCategory ${groceryCategoryIsValid}`);
  console.log(`brandName ${brandNameIsValid}`);
  console.log(`groceryStoreName ${groceryStoreNameIsValid}`);
  console.log(`purchaseDateIsValid ${purchaseDateIsValid}`);
  if (
    !nameIsValid &&
    !priceIsValid &&
    !groceryCategoryIsValid &&
    !brandNameIsValid &&
    !groceryStoreNameIsValid &&
    !purchaseDateIsValid
  ) {
    setInput((currentInput) => {
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
    });
    return true;
  }
  return false;
};
