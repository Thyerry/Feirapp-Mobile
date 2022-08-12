import { Platform, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

import { dateFormatter, toUTC } from "../../utils/date";
import Button from "./Button";

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
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode="date"
          display="default"
          onChange={onChangeValue}
        />
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

export default DatePicker;

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    marginVertical: 0,
  },
});
