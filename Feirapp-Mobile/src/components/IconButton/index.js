import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { pressableStyle } from "../../utils/pressableStyle";

const IconButton = ({ name, size, onPress, style }) => {
  return (
    <Pressable style={pressableStyle} onPress={onPress} testID="icon-button">
      <View style={style}>
        <Ionicons name={name} size={size} testID="icon" />
      </View>
    </Pressable>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default IconButton;
