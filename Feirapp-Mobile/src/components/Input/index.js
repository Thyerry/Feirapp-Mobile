import { StyleSheet, Text, View, TextInput } from "react-native";
import CurrencyInput from "react-native-currency-input";
import PropTypes from "prop-types";

import DatePicker from "../DatePicker";
import DropList from "../DropList";
import { FeirappColors } from "../../constants/colors";
import { GroceryItemCategory } from "../../constants/grocery-categories";

const Input = ({ type, title, placeholder, value, onChange }) => {
  const inputType = () => {
    switch (type) {
      case "text":
        return (
          <TextInput
            placeholder={placeholder}
            keyboardType="web-search"
            style={styles.textInput}
            value={value}
            onChangeText={onChange}
          />
        );
      case "numeric":
        return (
          <CurrencyInput
            placeholder={placeholder}
            keyboardType="numeric"
            style={styles.textInput}
            value={value}
            onChangeValue={onChange}
            prefix="R$"
            precision={2}
            defaultValue="0"
          />
        );
      case "date":
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            buttonStyle={styles.dateInput}
            textStyle={styles.dateTextInput}
          />
        );
      case "pickerSelect": {
        const items = GroceryItemCategory.map(
          (category) => new Object({ label: category.name, value: category.id })
        );
        return <DropList value={value} onChange={onChange} items={items} />;
      }
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {inputType()}
    </View>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  textInput: {
    backgroundColor: FeirappColors.primary010,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomColor: FeirappColors.primary050,
    borderBottomWidth: 2,
    marginVertical: 2,
    fontSize: 18,
  },
  dateInput: {
    backgroundColor: FeirappColors.primary010,
    borderBottomColor: FeirappColors.primary050,
    borderBottomWidth: 2,
    fontSize: 18,
  },
  dateTextInput: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "auto",
  },
});
