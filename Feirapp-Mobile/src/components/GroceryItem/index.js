import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";
import { GroceryItemCategory } from "../../constants/grocery-categories";
import { imagePicker } from "../../utils/image-picker";
import { pressableStyle } from "../../utils/pressableStyle";

const GroceryItem = ({ item }) => {
  const navigation = useNavigation();
  const { name, brandName, price, groceryStoreName } = item;
  const categoryName = GroceryItemCategory.find(
    (category) => category.id === item.groceryCategory
  );
  const imageUrl = imagePicker(item.groceryImageUrl, categoryName.id);

  const navigationHandler = () => {
    navigation.navigate("GroceryItemDetails", {
      groceryItem: item,
    });
  };

  return (
    <View style={{ flex: 0.5 }} testID="grocery-item">
      <Pressable
        onPress={navigationHandler}
        style={pressableStyle}
        testID="grocery-item-pressable"
      >
        <View style={styles.rootContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="center"
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.text} testID="grocery-item-name">
              {name}
            </Text>
            {!!brandName && (
              <Text style={styles.text} testID="grocery-item-brand">
                {brandName}
              </Text>
            )}
            <Text style={styles.store} testID="grocery-item-store">
              {`Mercado: ${groceryStoreName}`}
            </Text>
            <Text style={styles.price} testID="grocery-item-price">
              {`R$${price?.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

GroceryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GroceryItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 0.5,
    backgroundColor: FeirappColors.primary010,
    borderColor: FeirappColors.primary020,
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
    flexBasis: 0,
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
    height: 70,
    backgroundColor: FeirappColors.secondary010,
  },
  detailsContainer: {
    padding: 10,
    height: 100,
  },
  store: {
    fontSize: 10,
  },
});
