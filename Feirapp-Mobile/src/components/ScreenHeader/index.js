import { StyleSheet, Text, View } from "react-native";

import { FeirappColors } from "../../constants/colors";

const ScreenHeader = () => {
  return (
    <View>
      <Text style={[styles.text, styles.title]}>
        Boas Vindas ao Feirapp!
      </Text>
      <Text style={[styles.text]}>
        O seu organizador de compras de supermercado!
      </Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  text: {
    color: FeirappColors.secondary100,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    marginBottom: 12,
  },
});
