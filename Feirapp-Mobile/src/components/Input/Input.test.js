import { fireEvent, render, screen } from "@testing-library/react-native";
import Input from ".";

describe("<Input />", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(
        <Input
          type="text"
          value="text"
          onChange={() => {}}
          title="test input"
          placeholder="test placeholder"
        />
      );
    });
    it("it should render the component", () => {
      expect(screen.getByTestId("input-container"));
    });
    it("it should display the input title", () => {
      expect(screen.getByText("test input"));
    });
    it("it should display the input placeholder", () => {
      expect(screen.getByPlaceholderText("test placeholder"));
    });
  });
  describe("When the input type is", () => {
    describe("text", () => {
      it("it should display the value", () => {
        const { getByTestId } = render(
          <Input type="text" value="text input" onChange={() => {}} />
        );
        expect(getByTestId("text-input").props.keyboardType).toBe("default");
        expect(getByTestId("text-input").props.value).toBe("text input");
      });
    });
    describe("price", () => {
      it("it should display the value", () => {
        const { getByTestId } = render(
          <Input type="numeric" value="3.50" onChange={() => {}} />
        );
        expect(getByTestId("numeric-input").props.keyboardType).toBe("numeric");
        expect(getByTestId("numeric-input").props.value).toBe("R$3,50");
      });
    });
    describe("date", () => {
      it("it should display the DatePicker component", () => {
        const { getByTestId } = render(
          <Input type="date" value={new Date()} onChange={() => {}} />
        );
        expect(getByTestId("date-picker-container"));
      });
    });
    describe("pickerSelect", () => {
      it("it should display the DropList component", () => {
        const { getByTestId } = render(
          <Input type="pickerSelect" value={0} onChange={() => {}} />
        );
        expect(getByTestId("drop-list-input"));
      });
    });
  });
  describe("When onChange event", () => {
    it("should invoke the passed function", () => {
      const onChangeEvent = jest.fn();
      const { getByTestId } = render(
        <Input type="text" value="text input" onChange={onChangeEvent} />
      );
      fireEvent(getByTestId("text-input"), "onChangeText");
      expect(onChangeEvent).toHaveBeenCalled();
    });
  });
});
