import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GroceryItem from "./GroceryItem";
import { FeirappColors } from "../../../constants/colors";

const GroceryItemList = ({ list }) => {
  return (
    <View style={styles.groceryItemsContainer}>
      <FlatList
        numColumns={2}
        style={styles.groceryItemList}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GroceryItem item={itemData.item} />}
      />
    </View>
  );
};

export default GroceryItemList;

const styles = StyleSheet.create({
  groceryItemsContainer: {
    flex: 1,
    backgroundColor: `${FeirappColors.secondary010}77`,
    width: "100%",
    paddingHorizontal: 12,
  },
  groceryItemList: {
    marginTop: 6,
  },
});
