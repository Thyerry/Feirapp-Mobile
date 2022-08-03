import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FeirappColors } from "../constants/colors";

const MainScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.container, styles.titleContainer]}>
        <Text style={[styles.titleText, styles.title]}>
          Boas Vindas ao Feirapp!
        </Text>
        <Text style={[styles.titleText]}>
          O seu organizador de compras de supermercado!
        </Text>
      </View>
      <View style={[styles.container, styles.groceryItemsContainer]}>
        <Text>AQUI VAI A LISTA DE ITENS</Text>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
  },
  container: {
    width: "100%",
    paddingHorizontal: 24,
},
titleContainer: {
    backgroundColor: FeirappColors.primary010,
    borderBottomColor: FeirappColors.primary030,
    borderBottomWidth: 5,
    padding: 24,
  },
  groceryItemsContainer: {
    flex: 2,
  },
  titleText: {
    color: FeirappColors.secondary100,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    marginBottom: 12,
  },
});
