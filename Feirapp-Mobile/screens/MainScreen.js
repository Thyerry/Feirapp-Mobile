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
  const [refresh, setRefresh] = useState(false);
  const navigator = useNavigation();

  const navigationHandler = (screenName) => navigator.navigate(screenName);

  useEffect(() => {
    async function getGroceryList() {
      setIsLoading(true);
      const response = await GroceryItemAPI.getAll();
      setGroceryItemList(response.data);
      setIsLoading(false);
    }
    getGroceryList();
  }, [GroceryItemAPI]);

  const onRefresh = async () => {
    setRefresh(true);
    const response = await GroceryItemAPI.getAll();
    setGroceryItemList(response.data);
    setRefresh(false);
  };

  const renderGroceryList = () => {
    while (isLoading) {
      return (
        <LoadingOverlay
          backgroundColor={{ backgroundColor: FeirappColors.secondary010 }}
          spinnerColor={FeirappColors.primary050}
        />
      );
    }
    return (
      <GroceryItemList
        list={groceryItemList}
        refresh={refresh}
        onRefresh={onRefresh}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <ScreenHeader />
        <ButtonScroll navigationHandler={navigationHandler} />
      </View>
      {renderGroceryList()}
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
