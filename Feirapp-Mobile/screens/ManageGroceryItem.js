import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import { FeirappColors } from "../constants/colors";
import Input from "../components/ui/Input";
import { UTCDate } from "../utils/date";

const ManageGroceryItem = ({ defaultValues }) => {
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
  console.log(input);
  return (
    <View style={styles.rootContainer}>
      <Input
        type="text"
        title="Nome do produto"
        placeholder="Ex.: Café 350g"
        onChange={inputChangeHandler.bind(this, "name")}
      />
      <Input
        type="numeric"
        title="Preço"
        placeholder="R$5.00"
        onChange={inputChangeHandler.bind(this, "price")}
      />
      <Input
        type="text"
        title="Noma de marca"
        placeholder="Ex.: Santa Clara"
        onChange={inputChangeHandler.bind(this, "brandName")}
      />
      <Input
        type="text"
        title="Nome do mercado"
        placeholder="Ex.: Mercadinho Dois Irmãos"
        onChange={inputChangeHandler.bind(this, "groceryStoreName")}
      />
      <Input
        title="Data de compra"
        type="date"
        value={input.purchaseDate.value}
        onChange={inputChangeHandler.bind(this, "purchaseDate")}
      />
    </View>
  );
};

export default ManageGroceryItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: FeirappColors.secondary010,
  },
});
