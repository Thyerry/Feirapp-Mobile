import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import React, { useLayoutEffect } from "react";

import { FeirappColors } from "../../constants/colors";
import { dateFormatter } from "../../utils/date";
import { imagePicker } from "../../utils/image-picker";
import { GroceryItemCategory } from "../../constants/grocery-categories";
import IconButton from "../../components/IconButton";
import GroceryItemDetail from "../../components/GroceryItemDetail";
import GroceryItemAPI from "../../apis/GroceryItemAPI";

const GroceryItemDetails = ({ route, navigation }) => {
  const {
    id,
    brandName,
    groceryCategory,
    groceryImageUrl,
    groceryStoreName,
    priceHistory,
    name,
    price,
    purchaseDate,
  } = route.params?.groceryItem;

  const imageUrl = imagePicker(groceryImageUrl, groceryCategory);
  const category = GroceryItemCategory.find(
    (category) => category.id === groceryCategory
  );

  const navigationHandler = () => {
    navigation.navigate("ManageGroceryItem", {
      groceryItem: route.params?.groceryItem,
    });
  };

  const deleteHandler = async () => {
    try {
      console.log(id);
      await GroceryItemAPI.delete(id);
      Alert.alert(
        "Produto excluído",
        `${name} foi excluído com sucesso do banco de dados`,
        [{ text: "Voltar", onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      //console.log(error.response.data);
    }
  };
  const onDelete = () => {
    Alert.alert("Confirmar", `Você tem certeza que quer excluir ${name}`, [
      { text: "Sim", onPress: () => deleteHandler() },
      { text: "Não" },
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            name="trash"
            size={24}
            onPress={onDelete}
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
          <Text style={[styles.title, styles.price]}>R${price.toFixed(2)}</Text>
        </View>
        <GroceryItemDetail
          title="Marca"
          value={brandName}
          textStyle={styles.text}
        />
        <GroceryItemDetail
          title="Data de compra"
          value={dateFormatter(new Date(purchaseDate), "dd/mm/yyyy")}
          textStyle={styles.text}
        />
        <GroceryItemDetail
          title="Categoria"
          value={category.name}
          textStyle={styles.text}
        />
        <GroceryItemDetail
          title="Mercado"
          value={groceryStoreName}
          textStyle={styles.text}
        />
        <View style={styles.priceHistoryContainer}>
          <Text style={styles.priceHistoryTitle}>Historico de Preços</Text>
          <FlatList
            data={priceHistory}
            keyExtractor={(item) => priceHistory.indexOf(item)}
            renderItem={(itemData) => (
              <GroceryItemDetail
                title={dateFormatter(
                  new Date(itemData.item.logDate),
                  "dd/mm/yyyy"
                )}
                value={`R$${itemData.item.price.toFixed(2)}`}
                textStyle={[styles.text, { padding: 5 }]}
                containerStyle={{
                  justifyContent: "space-evenly",
                  borderWidth: 1,
                  borderColor: FeirappColors.primary060,
                  borderRadius: 24,
                }}
              />
            )}
          />
        </View>
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
  priceHistoryContainer: {
    height: "50%",
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  priceHistoryTitle: {
    padding: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
