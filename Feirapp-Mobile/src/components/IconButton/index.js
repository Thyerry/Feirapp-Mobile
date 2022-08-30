import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

export default IconButton;
