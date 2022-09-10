import { render, screen } from "@testing-library/react-native";

import * as helpers from "./helpers";
import DatePicker from ".";
import Button from "../Button";
import { toUTC } from "../../utils/date";

describe("<DatePicker />", () => {
  describe("When it renders", () => {
    beforeEach(() =>
      render(
        <DatePicker
          value={new Date()}
          onChange={() => {}}
          buttonStyle={{}}
          textStyle={{}}
        />
      )
    );
    it("it should not crash", () => {
      expect(screen.getByTestId("date-picker-container"));
    });
  });

  describe("When the platform is Android", () => {
    it("it should display the date button ", () => {
      jest.spyOn(helpers, "getOS").mockImplementation(() => false);
      const { container } = render(
        <DatePicker
          value={new Date()}
          onChange={() => {}}
          buttonStyle={{}}
          textStyle={{}}
        />
      );
      expect(container.findAllByType(Button).length).toBe(1);
    });
  });
  describe("When the platform ios", () => {
    it("it should not display the date button ", () => {
      jest.spyOn(helpers, "getOS").mockImplementation(() => true);
      const { container } = render(
        <DatePicker
          value={new Date()}
          onChange={() => {}}
          buttonStyle={{}}
          textStyle={{}}
        />
      );
      expect(container.findAllByType(Button).length).toBe(0);
    });
  });
});

describe("helpers.js", () => {
  describe("When showDatePicker is invoked", () => {
    it("should call the usedSetShow", () => {
      const value = "text";
      const onChange = () => true;
      const setShow = jest.fn();
      const isIos = true;
      helpers.setConsts(value, onChange, setShow, isIos);
      helpers.showDatePicker();
      expect(setShow).toHaveBeenCalledWith(true);
    });
  });
  describe("When onChangeValue is invoked", () => {
    describe("if the selectedDate is valid", () => {
      it("should invoke onChange with value", () => {
        const value = new Date();
        const onChange = jest.fn();
        const setShow = jest.fn();
        const isIos = true;
        const event = undefined;
        const selectedDate = undefined;

        helpers.setConsts(value, onChange, setShow, isIos);
        helpers.onChangeValue(event, selectedDate);

        expect(onChange).toHaveBeenCalledWith(toUTC(value));
      });
    });
    describe("if the device is iOS", () => {
      it("should invoke only onChange event", () => {
        const value = new Date();
        const onChange = jest.fn();
        const setShow = jest.fn();
        const isIos = true;
        const event = undefined;
        const selectedDate = new Date();

        helpers.setConsts(value, onChange, setShow, isIos);
        helpers.onChangeValue(event, selectedDate);

        expect(onChange).toHaveBeenCalledWith(toUTC(selectedDate));
      });
    });
    describe("if the device is Android", () => {
      it("should invoke onChange event and ", () => {
        const value = new Date();
        const onChange = jest.fn();
        const setShow = jest.fn();
        const isIos = false;
        const event = undefined;
        const selectedDate = new Date();

        helpers.setConsts(value, onChange, setShow, isIos);
        helpers.onChangeValue(event, selectedDate);

        expect(onChange).toHaveBeenCalledWith(toUTC(selectedDate));
        expect(setShow).toHaveBeenCalledWith(isIos);
      });
    });
  });
});
