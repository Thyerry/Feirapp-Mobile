import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FeirappColors } from "../constants/colors";
import ScreenHeader from "../components/ui/ScreenHeader";
import ButtonScroll from "../components/ui/ButtonScroll";

const MainScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.container, styles.titleContainer]}>
        <ScreenHeader />
        <ButtonScroll />
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
    borderBottomWidth: 5,
    borderBottomColor: FeirappColors.primary030,
  },
  groceryItemsContainer: {
    flex: 2,
  },


});
