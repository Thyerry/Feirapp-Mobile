import { Alert } from "react-native";
import { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";
import GroceryItemAPI from "../../apis/GroceryItemAPI";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingOverlay from "../../components/LoadingOverlay";
import GroceryItemForm from "../../components/GroceryItemForm";

const ManageGroceryItem = ({ route, navigation }) => {
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const groceryItem = route.params?.groceryItem;
  const isEditing = !!groceryItem;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editar" : "Adicionar",
    });
  }, [navigation, isEditing]);

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
      } else {
        const response = await GroceryItemAPI.update(groceryItemRequestBody);
        setIsSubmitting(false);
        Alert.alert(
          "Alteração feita!",
          `${response.data.name} foi alterado com sucesso na base de dados`,
          [{ text: "Voltar", onPress: () => navigation.goBack() }]
        );
      }
    } catch ({ response }) {
      setError(true);
      setIsSubmitting(false);
    }
  };

  if (error) return <ErrorMessage>deu ruim aí</ErrorMessage>;

  if (isSubmitting) {
    return (
      <LoadingOverlay
        backgroundColor={{ backgroundColor: FeirappColors.secondary010 }}
        spinnerColor={FeirappColors.primary050}
      />
    );
  }

  return (
    <GroceryItemForm
      isEditing={isEditing}
      onSubmit={confirmHandler}
      defaultValues={groceryItem}
    />
  );
};

ManageGroceryItem.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default ManageGroceryItem;
