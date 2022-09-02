import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const IconButton = ({ name, size, onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
      onPress={onPress}
    >
      <View style={style}>
        <Ionicons name={name} size={size} />
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
