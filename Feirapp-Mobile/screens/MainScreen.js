import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { FeirappColors } from "../constants/colors";
import ScreenHeader from "../components/ui/ScreenHeader";
import ButtonScroll from "../components/ui/ButtonScroll";
import GroceryItemAPI from "../apis/GroceryItemAPI";
import GroceryItem from "../components/ui/GroceryItem/GroceryItem";
import GroceryItemList from "../components/ui/GroceryItem/GroceryItemList";
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
      <View style={styles.titleContainer}>
        <ScreenHeader />
        <ButtonScroll />
      </View>
      <GroceryItemList list={groceryItemList} />
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
  titleContainer: {
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: FeirappColors.primary010,
    borderBottomWidth: 5,
    borderBottomColor: FeirappColors.primary030,
  },
});
