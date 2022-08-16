import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FeirappColors } from "../../constants/colors";

const GroceryItemDetail = ({ title, value, style }) => {
  return (
    <View style={styles.container}>
      <Text style={style}>{title}</Text>
      <Text style={style}>{value}</Text>
    </View>
  );
};

export default GroceryItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: FeirappColors.secondary030,
    padding: 8,
  },
});
