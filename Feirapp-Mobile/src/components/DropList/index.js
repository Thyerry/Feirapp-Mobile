import { StyleSheet } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import PropTypes from "prop-types";

import { FeirappColors } from "../../constants/colors";

const DropList = ({ value, onChange, items }) => {
  const [open, setOpen] = useState(false);
  const [stateValue, setStateValue] = useState(value);
  const [stateItems, setStateItems] = useState(items);

  return (
    <DropDownPicker
      setValue={setStateValue}
      setOpen={setOpen}
      setItems={setStateItems}
      value={stateValue}
      open={open}
      items={stateItems}
      onChangeValue={onChange}
      style={styles.root}
      listItemContainerStyle={styles.listItemContainer}
      textStyle={styles.text}
      dropDownContainerStyle={styles.dropDownContainer}
      zIndex={3000}
    />
  );
};

DropList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default DropList;

const styles = StyleSheet.create({
  root: {
    backgroundColor: FeirappColors.primary010,
    borderWidth: 0,
    borderRadius: 0,
  },
  listItemContainer: {
    backgroundColor: FeirappColors.primary010,
  },
  text: { fontWeight: "bold" },
  dropDownContainer: {
    borderWidth: 0,
    backgroundColor: FeirappColors.primary010,
  },
});
