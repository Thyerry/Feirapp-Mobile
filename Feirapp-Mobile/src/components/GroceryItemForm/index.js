import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { useState } from "react";

import { groceryItemValidator } from "../../utils/validators";
import Input from "../Input";
import Button from "../Button";
import { FeirappColors } from "../../constants/colors";
import { inputChange, setValues, validateDefaultValues } from "./helpers";

// TODO: remove the disable bellow after creating validators for the fields
// eslint-disable-next-line no-unused-vars
const GroceryItemForm = ({ onSubmit, isEditing, defaultValues }) => {
  const values = validateDefaultValues(defaultValues);
  const [input, setInput] = useState({
    id: {
      value: values.id,
      isValid: true,
    },
    name: {
      value: values.name,
      isValid: true,
    },
    price: {
      value: values.price,
      isValid: true,
    },
    groceryCategory: {
      value: values.groceryCategory,
      isValid: true,
    },
    brandName: {
      value: values.brandName,
      isValid: true,
    },
    groceryStoreName: {
      value: values.groceryStoreName,
      isValid: true,
    },
    purchaseDate: {
      value: values.purchaseDate,
      isValid: true,
    },
  });

  setValues(setInput);

  const submitHandler = () => {
    const groceryItemRequestBody = {
      id: input.id.value.trim(),
      name: input.name.value.trim(),
      price: input.price.value,
      groceryCategory: input.groceryCategory.value,
      brandName: input.brandName.value.trim(),
      groceryStoreName: input.groceryStoreName.value.trim(),
      purchaseDate: input.purchaseDate.value,
    };

    if (groceryItemValidator(groceryItemRequestBody, setInput)) {
      return;
    }

    onSubmit(groceryItemRequestBody);
  };

  return (
    <View style={styles.rootContainer} testID="grocery-item-form-container">
      <Input
        type="text"
        title="Nome do produto"
        placeholder="Ex.: Café 350g"
        value={input.name.value}
        onChange={inputChange.bind(this, "name")}
      />
      <Input
        type="numeric"
        title="Preço"
        value={input.price.value}
        onChange={inputChange.bind(this, "price")}
      />
      <Input
        type="text"
        title="Nome de marca"
        placeholder="Ex.: Santa Clara"
        value={input.brandName.value}
        onChange={inputChange.bind(this, "brandName")}
      />
      <Input
        type="text"
        title="Nome do mercado"
        placeholder="Ex.: Mercadinho Dois Irmãos"
        value={input.groceryStoreName.value}
        onChange={inputChange.bind(this, "groceryStoreName")}
      />
      <Input
        title="Data de compra"
        type="date"
        value={input.purchaseDate.value}
        onChange={inputChange.bind(this, "purchaseDate")}
      />
      <Input
        title="Categoria"
        type="pickerSelect"
        value={input.groceryCategory.value}
        onChange={inputChange.bind(this, "groceryCategory")}
      />
      <Button onPress={submitHandler}>Finalizar</Button>
    </View>
  );
};

GroceryItemForm.propTypes = {
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

export default GroceryItemForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: FeirappColors.secondary010,
  },
});
