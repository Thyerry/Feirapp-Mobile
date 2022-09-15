import { render, screen } from "@testing-library/react-native";
import LoadingOverlay from ".";

const spinnerColor = "#000000";

describe("<LoadingOverlay />", () => {
  describe("When it render", () => {
    beforeEach(() => {
      render(<LoadingOverlay spinnerColor={spinnerColor} />);
    });
    it("it shouldn't crash", () => {
      expect(screen.getByTestId("loading-overlay-container"));
    });
    it("it should be of correct color", () => {
      const result = screen.getByTestId(
        "loading-overlay-activity-indicator"
      ).props;
      expect(result.color).toBe(spinnerColor);
    });
  });
});
