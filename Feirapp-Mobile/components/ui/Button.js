import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FeirappColors } from "../../constants/colors";

let aux = "";

const Button = ({ children, onPress, style }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: FeirappColors.primary090 }}
        style={
          Platform.OS === "ios"
            ? ({ pressed }) => (pressed ? { opacity: 0.25 } : {})
            : {}
        }
      >
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: FeirappColors.primary040,
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
  },
  button: {
    padding: 8,
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
  },
});
