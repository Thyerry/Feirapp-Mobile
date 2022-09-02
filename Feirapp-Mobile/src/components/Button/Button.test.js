import { render, screen, fireEvent } from "@testing-library/react-native";
import Button from ".";
import { Text, View } from "react-native";

const childrenTestId = "button-children";

const buttonText = (
  <View testID={childrenTestId}>
    <Text>asda</Text>
  </View>
);

describe("<Button />", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(<Button onPress={() => {}}>{buttonText}</Button>);
    });
    it("it should render all intern components properly", () => {
      expect(screen.getByTestId("button-container"));
      expect(screen.getByTestId("button-children-container"));
      expect(screen.getByTestId("button-children-text"));
    });
    it("it should render its children", () => {
      expect(screen.getByTestId("button-children"));
    });
    it("it should apply the default styles", () => {
      const result = screen.getByTestId("button-pressable").props.style;
      const expected = {};
      expect(result).toStrictEqual(expected);
    });
  });

  describe("When the button is pressed", () => {
    it("it should callback the onPress event", () => {
      const onPressEvent = jest.fn();
      const { getByTestId } = render(<Button onPress={onPressEvent}>{buttonText}</Button>);
      fireEvent(getByTestId("button-pressable"), "onPress", "asd");
      expect(onPressEvent).toHaveBeenCalledWith("asd");
    });
  });
});
