import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import GroceryItemAPI from "../../apis/GroceryItemAPI";
import GroceryItemList from "../../components/GroceryItemList";
import ErrorMessage from "../../components/ErrorMessage";
import IconButton from "../../components/IconButton";
import LoadingOverlay from "../../components/LoadingOverlay";
import { FeirappColors } from "../../constants/colors";

const SearchGroceryItems = () => {
  const [searchItem, setSearchItem] = useState(null);
  const [resultList, setResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getError, setGetError] = useState("");

  const textInputHandler = (input) => {
    setSearchItem(input);
  };

  const searchItemHandler = async () => {
    setGetError("");
    setIsLoading(true);
    try {
      const response = await GroceryItemAPI.getName(searchItem);
      setResultList(response.data);
    } catch (error) {
      setGetError(error);
    }
    setIsLoading(false);
  };

  const listContainerHandler = () => {
    if (isLoading) {
      return (
        <LoadingOverlay
          backgroundColor={{ backgroundColor: FeirappColors.secondary010 }}
          spinnerColor={FeirappColors.primary050}
        />
      );
    }
    if (getError)
      return (
        <ErrorMessage
          viewStyle={styles.errorMessageContainer}
          textStyle={styles.errorMessage}
        >
          Não encontramos nenhum resultado 🤡
        </ErrorMessage>
      );

    return <GroceryItemList list={resultList} />;
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome do produto"
            value={searchItem}
            onChangeText={textInputHandler}
            onSubmitEditing={searchItemHandler}
          />
          <IconButton
            name="search"
            size={13}
            onPress={searchItemHandler}
            style={styles.searchButton}
          />
        </View>
      </View>
      {listContainerHandler()}
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
    paddingVertical: 6,
    paddingHorizontal: 12,
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
  errorMessageContainer: {
    flex: 1,
    backgroundColor: FeirappColors.primary010,
    alignItems: "center",
  },
  errorMessage: {
    margin: 20,
    fontSize: 24,
    color: FeirappColors.secondary050,
    textAlign: "center",
  },
});
