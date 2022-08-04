import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import { FeirappColors } from "../../constants/colors";

const ButtonScroll = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button}>Novo Produto</Button>
        <Button style={styles.button}>Nova Lista</Button>
        <Button style={styles.button}>Pesquisar</Button>
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
