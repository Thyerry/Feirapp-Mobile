import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";

const GroceryItemDetail = ({ title, value, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle} testID="grocery-item-detail-title">
        {title}
      </Text>
      <Text style={textStyle} testID="grocery-item-detail-value">
        {value}
      </Text>
    </View>
  );
};

GroceryItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
