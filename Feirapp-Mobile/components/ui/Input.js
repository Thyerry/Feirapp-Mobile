import { StyleSheet, Text, View, TextInput } from "react-native";
import { FeirappColors } from "../../constants/colors";
import DatePicker from "./DatePicker";

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
        break;
      case "numeric":
        return (
          <TextInput
            placeholder={placeholder}
            keyboardType="numeric"
            style={styles.textInput}
            value={value}
            onChangeText={onChange}
          />
        );
        break;
      case "date":
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            buttonStyle={styles.dateInput}
            textStyle={styles.dateTextInput}
          />
        );
        break;
      case "dropList":
        break;
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
