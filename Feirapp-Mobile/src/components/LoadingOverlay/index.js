import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const LoadingOverlay = ({ backgroundColor, spinnerColor }) => {
  return (
    <View style={[styles.overlay, backgroundColor]}>
      <ActivityIndicator size="large" color={spinnerColor} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
