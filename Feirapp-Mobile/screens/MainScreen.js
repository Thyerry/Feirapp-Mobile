import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { FeirappColors } from "../constants/colors";
import ScreenHeader from "../components/ui/ScreenHeader";
import ButtonScroll from "../components/ui/ButtonScroll";
import GroceryItemAPI from "../apis/GroceryItemAPI";
import GroceryItem from "../components/ui/GroceryItem/GroceryItem";
const MainScreen = () => {
  const [groceryItemList, setGroceryItemList] = useState([]);

  useEffect(() => {
    async function getGroceryList() {
      const response = await GroceryItemAPI.getAll();
      setGroceryItemList(response.data);
    }

    getGroceryList();
  }, [GroceryItemAPI]);

  return (
    <View style={styles.rootContainer}>
      <View style={[styles.container, styles.titleContainer]}>
        <ScreenHeader />
        <ButtonScroll />
      </View>
      <View style={[styles.container, styles.groceryItemsContainer]}>
        <FlatList
          numColumns={2}
          style={styles.groceryItemList}
          data={groceryItemList}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <GroceryItem item={itemData.item} />}
        />
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
  container: {},
  titleContainer: {
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: FeirappColors.primary010,
    borderBottomWidth: 5,
    borderBottomColor: FeirappColors.primary030,
  },
  groceryItemsContainer: {
    flex: 2,
    backgroundColor: `${FeirappColors.secondary010}77`,
    width: "100%",
    paddingHorizontal: 12,
  },
  groceryItemList: {
    marginTop: 6,
  },
});
