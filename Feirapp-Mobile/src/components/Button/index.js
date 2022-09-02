import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";
import { pressableStyle } from "../../utils/pressableStyle";

const Button = ({ children, onPress, style, textStyle }) => {
  return (
    <View style={[styles.buttonContainer, style]} testID="button-container" acc>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: FeirappColors.primary090 }}
        testID="button-pressable"
        style={pressableStyle(Platform.OS)}
      >
        <View style={styles.button} testID="button-children-container">
          <Text style={[styles.text, textStyle]} testID="button-children-text">
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: FeirappColors.primary040,
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
    zIndex: -1,
  },
  button: {
    padding: 8,
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
  },
});
