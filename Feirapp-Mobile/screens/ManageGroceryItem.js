import { StyleSheet, Alert } from "react-native";
import { useState } from "react";

import { FeirappColors } from "../constants/colors";
import GroceryItemAPI from "../apis/GroceryItemAPI";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import GroceryItemForm from "../components/GroceryItem/GroceryItemForm";

const ManageGroceryItem = ({ route, navigation }) => {
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const groceryItem = route.params?.groceryItem;
  const isEditing = !!groceryItem;

  const confirmHandler = async (groceryItemRequestBody) => {
    setIsSubmitting(true);
    try {
      if (!isEditing) {
        const response = await GroceryItemAPI.create(groceryItemRequestBody);
        setIsSubmitting(false);
        Alert.alert(
          "Produto adicionado!",
          `${response.data.name} foi adicionado com sucesso na base de dados`,
          [
            { text: "Adicionar mais um" },
            { text: "Voltar", onPress: () => navigation.goBack() },
          ]
        );
      }
    } catch (error) {
      setError(true);
      setIsSubmitting(false);
    }
  };

  if (error) return <ErrorMessage>deu ruim aí</ErrorMessage>;

  if (isSubmitting)
    return (
      <LoadingOverlay
        backgroundColor={{ backgroundColor: FeirappColors.secondary010 }}
        spinnerColor={FeirappColors.primary050}
      />
    );

  return (
    <GroceryItemForm
      isEditing={isEditing}
      onSubmit={confirmHandler}
      defaultValues={groceryItem}
    />
  );
};

export default ManageGroceryItem;

const styles = StyleSheet.create({});
