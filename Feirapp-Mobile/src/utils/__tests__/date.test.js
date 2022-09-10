import * as date from "../date";

describe("date.js", () => {
  describe("When invoking dateFormatter", () => {
    it("it should return a string", () => {
      const result = typeof date.dateFormatter(new Date(), "dd/mm/yyyy");
      expect(result).toBe("string");
    });
    describe("passing the dd/mm/yyyy ", () => {
      it("it should return the date formatted", () => {
        const newDate = new Date(1111, 0, 1);
        const result = date.dateFormatter(newDate, "dd/mm/yyyy");
        expect(result).toBe("01/01/1111");
      });
    });
    describe("passing the yyyy-mm-dd ", () => {
      it("it should return the date formatted", () => {
        const newDate = new Date(1111, 0, 1);

        const result = date.dateFormatter(newDate, "yyyy-mm-dd");
        expect(result).toBe("1111-01-01");
      });
    });
  });
  describe("When invoking stringToDate", () => {
    it("it should return a Date type", () => {
      const result = date.stringToDate("1111-1-1");
      expect(result instanceof Date).toBe(true);
    });
    it("it should return the correct date", () => {
      const result = date.stringToDate("1111-1-1");
      expect(result.toLocaleDateString()).toBe("1/1/1111");
    });
  });
  describe("When invoking toUTC", () => {
    it("it should return a Date type", () => {
      const result = date.toUTC(new Date());
      expect(result instanceof Date).toBe(true);
    });
    it("it should return the correct date", () => {
      const result = date.toUTC(new Date(1111, 0, 1));
      expect(result.toLocaleDateString()).toBe("1/1/1111");
    });
  });
  describe("When invoking UTCDate", () => {
    it("it should return a Date type", () => {
      const result = date.UTCDate();
      expect(result instanceof Date).toBe(true);
    });
  });
});
