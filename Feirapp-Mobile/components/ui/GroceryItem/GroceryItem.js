import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { FeirappColors } from "../../../constants/colors";
import { GroceryItemCategory } from "../../../constants/grocery-categories";
import { imagePicker } from "../../../utils/image-picker";

const GroceryItem = ({ item }) => {
  const name = item.name;
  const brandName = item.brandName;
  const price = item.price;
  const categoryName = GroceryItemCategory.find(
    (category) => category.id === item.groceryCategory
  );
  const imageUrl = imagePicker(item.groceryImageUrl, categoryName.id);

  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: FeirappColors.primary011 }}
        style={{ flex: 1 }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="center"
        />
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            {!!brandName && <Text style={styles.name}>{brandName}</Text>}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>R${price?.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default GroceryItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: FeirappColors.primary010,
    margin: 2,
    borderRadius: 12,
    elevation: 2,
    overflow: "hidden",
    // Shadow for iOS
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: FeirappColors.secondary070,
  },
  image: {
    width: "100%",
    height: 70,
    backgroundColor: FeirappColors.secondary010,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
