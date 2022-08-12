import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FeirappColors } from "../constants/colors";
import ScreenHeader from "../components/ui/ScreenHeader";
import ButtonScroll from "../components/ui/ButtonScroll";
import GroceryItemAPI from "../apis/GroceryItemAPI";
import GroceryItemList from "../components/GroceryItem/GroceryItemList";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const MainScreen = () => {
  const [groceryItemList, setGroceryItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigation();

  const navigationHandler = (screenName) => navigator.navigate(screenName);

  useEffect(() => {
    setIsLoading(true);
    async function getGroceryList() {
      const response = await GroceryItemAPI.getAll();
      setGroceryItemList(response.data);
    }

    getGroceryList();
    setIsLoading(false);
  }, [GroceryItemAPI]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <ScreenHeader />
        <ButtonScroll navigationHandler={navigationHandler} />
      </View>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <GroceryItemList list={groceryItemList} />
      )}
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
