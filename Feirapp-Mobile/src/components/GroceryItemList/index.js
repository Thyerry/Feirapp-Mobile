import { FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

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

GroceryItemList.propTypes = {
  list: PropTypes.array.isRequired,
  refresh: PropTypes.bool,
  onRefresh: PropTypes.func,
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
