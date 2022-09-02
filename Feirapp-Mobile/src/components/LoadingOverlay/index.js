import { ActivityIndicator, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const LoadingOverlay = ({ backgroundColor, spinnerColor }) => {
  return (
    <View style={[styles.overlay, backgroundColor]}>
      <ActivityIndicator size="large" color={spinnerColor} />
    </View>
  );
};

LoadingOverlay.propTypes = {
  backgroundColor: PropTypes.object,
  spinnerColor: PropTypes.string,
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
