import { Platform } from "react-native";

import { toUTC } from "../../utils/date";

let usedValue = undefined;
let usedOnChange = undefined;
let usedSetShow = undefined;
let usedIsIos = undefined;

export const setConsts = (value, onChange, setShow, isIos) => {
  usedValue = value;
  usedOnChange = onChange;
  usedSetShow = setShow;
  usedIsIos = isIos;
};

export const getOS = () => {
  return Platform.OS == "ios";
};

export const showDatePicker = () => {
  usedSetShow(true);
};

export const onChangeValue = (event, selectedDate) => {
  const currentDate = selectedDate || usedValue;
  usedOnChange(toUTC(currentDate));
  if (!usedIsIos) {
    usedSetShow(usedIsIos);
  }
};
