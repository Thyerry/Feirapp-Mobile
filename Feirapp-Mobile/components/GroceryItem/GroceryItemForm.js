import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { groceryItemValidator } from "../../constants/validators";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FeirappColors } from "../../constants/colors";

const GroceryItemForm = ({ isEditing, onSubmit, defaultValues }) => {
  const [input, setInput] = useState({
    name: {
      value: defaultValues ? defaultValues.name : "",
      isValid: true,
    },
    price: {
      value: defaultValues ? defaultValues.price : 0,
      isValid: true,
    },
    groceryCategory: {
      value: defaultValues ? defaultValues.groceryCategory : 0,
      isValid: true,
    },
    brandName: {
      value: defaultValues ? defaultValues.brandName : "",
      isValid: true,
    },
    groceryStoreName: {
      value: defaultValues ? defaultValues.groceryStoreName : "",
      isValid: true,
    },
    purchaseDate: {
      value: defaultValues ? defaultValues.purchaseDate : new Date(),
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIndentifier, enteredInput) => {
    setInput((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIndentifier]: { value: enteredInput, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const groceryItemRequestBody = {
      name: input.name.value.trim(),
      price: input.price.value,
      groceryCategory: input.groceryCategory.value,
      brandName: input.brandName.value.trim(),
      groceryStoreName: input.groceryStoreName.value.trim(),
      purchaseDate: input.purchaseDate.value,
    };
    if (groceryItemValidator(groceryItemRequestBody, setInput)) {
      console.log("erro");
      return;
    }
    onSubmit(groceryItemRequestBody);
  };

  return (
    <View style={styles.rootContainer}>
      <Input
        type="text"
        title="Nome do produto"
        placeholder="Ex.: Café 350g"
        value={input.name.value}
        onChange={inputChangeHandler.bind(this, "name")}
      />
      <Input
        type="numeric"
        title="Preço"
        placeholder="R$5.00"
        value={input.price.value}
        onChange={inputChangeHandler.bind(this, "price")}
      />
      <Input
        type="text"
        title="Noma de marca"
        placeholder="Ex.: Santa Clara"
        value={input.brandName.value}
        onChange={inputChangeHandler.bind(this, "brandName")}
      />
      <Input
        type="text"
        title="Nome do mercado"
        placeholder="Ex.: Mercadinho Dois Irmãos"
        value={input.groceryStoreName.value}
        onChange={inputChangeHandler.bind(this, "groceryStoreName")}
      />
      <Input
        title="Data de compra"
        type="date"
        value={input.purchaseDate.value}
        onChange={inputChangeHandler.bind(this, "purchaseDate")}
      />
      <Input
        title="Categoria"
        type="pickerSelect"
        value={input.groceryCategory.value}
        onChange={inputChangeHandler.bind(this, "groceryCategory")}
      />
      <Button onPress={submitHandler}>Finalizar</Button>
    </View>
  );
};

export default GroceryItemForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: FeirappColors.secondary010,
  },
});
