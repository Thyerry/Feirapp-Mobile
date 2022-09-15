let _inputIndentifier;
let _enteredInput;
let _setInput;

export const validateDefaultValues = (defaultValues) => {
  if (defaultValues) {
    defaultValues.purchaseDate = new Date(defaultValues.purchaseDate);
    return defaultValues;
  }
  return {
    id: "",
    name: "",
    price: 0,
    groceryCategory: 0,
    brandName: "",
    groceryStoreName: "",
    purchaseDate: new Date(),
  };
};
export const setValues = (setInput) => {
  _setInput = setInput;
};
export const inputChange = (inputIndentifier, enteredInput) => {
  _inputIndentifier = inputIndentifier;
  _enteredInput = enteredInput;
  _setInput(returnUpdatedState.bind(this));
};
export const returnUpdatedState = (currentInputValues) => {
  return {
    ...currentInputValues,
    [_inputIndentifier]: { value: _enteredInput, isValid: true },
  };
};
