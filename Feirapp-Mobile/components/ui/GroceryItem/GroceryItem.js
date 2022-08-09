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
      <Pressable style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}>
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="center"
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>{name}</Text>
            {!!brandName && <Text style={styles.text}>{brandName}</Text>}
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
    flex: 1 / 2,
    backgroundColor: FeirappColors.primary010,
    borderColor: FeirappColors.primary020,
    borderWidth: 1,
    borderRadius: 12,
    elevation: 2,
    overflow: "hidden",
  },
  innerContainer: {
    alignItems: "flex-start",
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
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
  detailsContainer: {
    margin: 2,
  },
});