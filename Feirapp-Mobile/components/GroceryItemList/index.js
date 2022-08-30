import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import GroceryItem from "../GroceryItem";
import { FeirappColors } from "../../constants/colors";

const GroceryItemList = ({ list, refresh, onRefresh }) => {
  return (
    <View style={styles.groceryItemsContainer}>
      <FlatList
        numColumns={2}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GroceryItem item={itemData.item} />}
        refreshing={!!refresh}
        onRefresh={onRefresh}
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
    padding: 12,
  },
});
