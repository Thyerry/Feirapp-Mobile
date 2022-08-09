import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { FeirappColors } from "../../constants/colors";

const ButtonScroll = () => {
  const navigator = useNavigation();

  const navigationHandler = () => {
    navigator.navigate("SearchGroceryItems");
  };
  return (
    <ScrollView horizontal={true}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button}>Novo Produto</Button>
        <Button style={styles.button}>Nova Lista</Button>
        <Button style={styles.button} onPress={navigationHandler}>
          Pesquisar
        </Button>
        <Button style={styles.button}>Importar Nota Fiscal</Button>
      </View>
    </ScrollView>
  );
};

export default ButtonScroll;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    margin: 2.5,
    backgroundColor: FeirappColors.secondary010,
  },
});
