import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GroceryItemAPI from "../apis/GroceryItemAPI";
import { FeirappColors } from "../constants/colors";

const SearchGroceryItems = () => {
  const [searchItem, setSearchItem] = useState(null);
  const [resultList, setResultList] = useState([]);

  const textInputHandler = (input) => {
    setSearchItem(input);
  };

  const searchItemHandler = async () => {
    const response = await GroceryItemAPI.getName(searchItem);
    setResultList(response.data);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Pesquisar</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome do produto"
            value={searchItem}
            onChangeText={textInputHandler}
          />
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
            onPress={searchItemHandler}
          >
            <View style={styles.searchButton}>
              <Ionicons name="search" size={13} />
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <FlatList
          data={resultList}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
        />
      </View>
    </View>
  );
};

export default SearchGroceryItems;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: `${FeirappColors.primary010}77`,
  },
  headerContainer: {
    margin: 10,
  },
  textInputContainer: {
    width: "90%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "90%",
    padding: 10,
    backgroundColor: FeirappColors.secondary010,
    borderColor: FeirappColors.secondary020,
    borderWidth: 1,
    borderRadius: 24,
  },
  searchButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: FeirappColors.secondary030,
    width: "175%",
    marginHorizontal: 5,
    borderRadius: 25,
  },
  headerTitle: {
    paddingLeft: 8,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 12,
  },
});
