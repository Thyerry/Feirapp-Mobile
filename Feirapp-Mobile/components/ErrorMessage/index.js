import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorMessage = ({ viewStyle, textStyle, children }) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({});
