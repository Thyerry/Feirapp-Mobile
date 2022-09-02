import { Platform, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import PropTypes from "prop-types";

import { dateFormatter, toUTC } from "../../utils/date";
import Button from "../Button";
import { FeirappColors } from "../../constants/colors";

const DatePicker = ({ value, onChange, buttonStyle, textStyle }) => {
  const isIos = Platform.OS === "ios";
  const [show, setShow] = useState(isIos);

  const onChangeValue = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    onChange(toUTC(currentDate));
    if (!isIos) {
      setShow(isIos);
    }
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.datePickerStyle}>
      {show && (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ width: "24%" }} />
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode="date"
            display="default"
            onChange={onChangeValue}
            style={{ width: "53%" }}
          />
          <View style={{ width: "23%" }} />
        </View>
      )}
      {!isIos && (
        <Button
          onPress={showDatePicker}
          style={[styles.button, buttonStyle]}
          textStyle={textStyle}
        >
          {dateFormatter(value, "dd/mm/yyyy")}
        </Button>
      )}
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
  button: {
    borderRadius: 0,
    marginVertical: 0,
  },
});
