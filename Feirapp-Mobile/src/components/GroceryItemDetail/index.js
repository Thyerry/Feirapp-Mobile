import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FeirappColors } from "../../constants/colors";

const GroceryItemDetail = ({ title, value, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>{title}</Text>
      <Text style={textStyle}>{value}</Text>
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
