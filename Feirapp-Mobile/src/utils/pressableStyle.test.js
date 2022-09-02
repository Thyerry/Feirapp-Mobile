import { pressableStyle } from "./pressableStyle";

const iosStyle = { opacity: 0.25 };
const noStyle = {};

describe("When called", () => {
  describe("on a iOS device", () => {
    it("should style", () => {
      const iosResult = pressableStyle("ios");
      expect(iosResult({ pressed: true })).toStrictEqual(iosStyle);
    });
    it("should not style", () => {
      const iosResult = pressableStyle("ios");
      expect(iosResult({ pressed: false })).toStrictEqual(noStyle);
    });
  });

  describe("on a AndroidDevice", () => {
    it("should style for android", () => {
      expect(pressableStyle("android")).toStrictEqual(noStyle);
    });
  });
});
