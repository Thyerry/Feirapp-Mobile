import { ScrollView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import Button from "../Button";
import { FeirappColors } from "../../constants/colors";

const ButtonScroll = ({ navigationHandler }) => {
  const navigateTo = (screenName) => {
    navigationHandler(screenName);
  };
  return (
    <ScrollView horizontal={true}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          onPress={navigateTo.bind(this, "ManageGroceryItem")}
        >
          Novo Produto
        </Button>
        <Button style={styles.button}>Nova Lista</Button>
        <Button
          style={styles.button}
          onPress={navigateTo.bind(this, "SearchGroceryItems")}
        >
          Pesquisar
        </Button>
        <Button style={styles.button}>Importar Nota Fiscal</Button>
      </View>
    </ScrollView>
  );
};

ButtonScroll.propTypes = {
  navigationHandler: PropTypes.func.isRequired,
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
