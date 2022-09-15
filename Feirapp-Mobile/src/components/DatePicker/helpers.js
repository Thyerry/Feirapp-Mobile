import { Platform } from "react-native";

import { toUTC } from "../../utils/date";

let _value;
let _onChange;
let _setShow;
let _isIos;

export const setConsts = (value, onChange, setShow, isIos) => {
  _value = value;
  _onChange = onChange;
  _setShow = setShow;
  _isIos = isIos;
};

export const getOS = () => {
  return Platform.OS == "ios";
};

export const showDatePicker = () => {
  _setShow(true);
};

export const onChangeValue = (event, selectedDate) => {
  const currentDate = selectedDate || _value;
  _onChange(toUTC(currentDate));
  if (!_isIos) {
    _setShow(_isIos);
  }
};
