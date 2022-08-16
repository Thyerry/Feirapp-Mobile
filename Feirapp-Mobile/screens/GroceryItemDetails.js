import { StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { FeirappColors } from "../constants/colors";
import { dateFormatter } from "../utils/date";
import { imagePicker } from "../utils/image-picker";
import { GroceryItemCategory } from "../constants/grocery-categories";
import IconButton from "../components/ui/IconButton";
import GroceryItemDetail from "../components/GroceryItem/GroceryItemDetail";

const GroceryItemDetails = ({ route, navigation }) => {
  const {
    brandName,
    groceryCategory,
    groceryImageUrl,
    groceryStoreName,
    id,
    name,
    price,
    purchaseDate,
  } = route.params?.groceryItem;

  const imageUrl = imagePicker(groceryImageUrl, groceryCategory);
  const category = GroceryItemCategory.find(
    (category) => category.id === groceryCategory
  );

  const navigationHandler = () => {
    navigation.navigate("AddGroceryItem", {
      groceryItem: route.params?.groceryItem,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            name="trash"
            size={24}
            onPress={() => alert("deletar GroceryItem")}
            style={{ marginHorizontal: 14 }}
          />
          <IconButton
            name="create-outline"
            size={24}
            onPress={navigationHandler}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{name}</Text>
          <Text style={[styles.title, styles.price]}>R${price}</Text>
        </View>
        <GroceryItemDetail
          title="Marca"
          value={brandName}
          style={styles.text}
        />
        <GroceryItemDetail
          title="Data de compra"
          value={dateFormatter(new Date(purchaseDate), "dd/mm/yyyy")}
          style={styles.text}
        />
        <GroceryItemDetail
          title="Categoria"
          value={category.name}
          style={styles.text}
        />
        <GroceryItemDetail
          title="Mercado"
          value={groceryStoreName}
          style={styles.text}
        />
      </View>
    </View>
  );
};

export default GroceryItemDetails;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: FeirappColors.primary010,
    padding: 24,
  },
  text: {
    fontWeight: "bold",
  },
  imageContainer: {
    borderBottomWidth: 5,
    borderBottomColor: FeirappColors.primary050,
    overflow: "hidden",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  image: {
    height: 150,
    backgroundColor: FeirappColors.secondary010,
  },
  detailsContainer: {
    alignItems: "center",
  },
  titleView: {
    width: "100%",
    padding: 24,
    backgroundColor: FeirappColors.primary040,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    color: FeirappColors.secondary070,
  },
});
