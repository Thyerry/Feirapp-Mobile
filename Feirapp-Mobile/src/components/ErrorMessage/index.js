import { Text, View } from "react-native";
import PropTypes from "prop-types";

const ErrorMessage = ({ viewStyle, textStyle, children }) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

ErrorMessage.propTypes = {
  viewStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default ErrorMessage;
