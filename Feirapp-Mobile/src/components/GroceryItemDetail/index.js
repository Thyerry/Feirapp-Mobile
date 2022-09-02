import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";

const GroceryItemDetail = ({ title, value, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>{title}</Text>
      <Text style={textStyle}>{value}</Text>
    </View>
  );
};

GroceryItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
};

export default GroceryItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: FeirappColors.secondary030,
    padding: 8,
  },
});
