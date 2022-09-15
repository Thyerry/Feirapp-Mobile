import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import PropTypes from "prop-types";

import { dateFormatter } from "../../utils/date";
import Button from "../Button";
import { FeirappColors } from "../../constants/colors";
import { getOS, onChangeValue, setConsts, showDatePicker } from "./helpers";

const DatePicker = ({ value, onChange, buttonStyle, textStyle }) => {
  const isIos = getOS();
  const [show, setShow] = useState(isIos);

  setConsts(value, onChange, setShow, isIos);

  const datePicker = (
    <View style={styles.dateContainer}>
      <View style={{ width: "24%" }} />
      <DateTimePicker
        testID="date-input"
        value={value}
        mode="date"
        display="default"
        onChange={onChangeValue}
        style={{ width: "53%" }}
      />
      <View style={{ width: "23%" }} />
    </View>
  );

  const renderAndroidButton = () => {
    if (!isIos) {
      return (
        <Button
          onPress={showDatePicker}
          style={[styles.button, buttonStyle]}
          textStyle={textStyle}
        >
          {dateFormatter(value, "dd/mm/yyyy")}
        </Button>
      );
    }
  };

  return (
    <View style={styles.datePickerStyle} testID="date-picker-container">
      {show && datePicker}
      {renderAndroidButton()}
    </View>
  );
};

DatePicker.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
};

export default DatePicker;

const styles = StyleSheet.create({
  datePickerStyle: {
    backgroundColor: FeirappColors.primary010,
    padding: 1,
  },
  dateContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 0,
    marginVertical: 0,
  },
});
