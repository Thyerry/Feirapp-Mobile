import { render, screen } from "@testing-library/react-native";
import ErrorMessage from ".";

const errorMessageChildren = "Error Message";

describe("<ErrorMessage />", () => {
  describe("When it renders", () => {
    beforeEach(() =>
      render(
        <ErrorMessage textStyle={{}} viewStyle={{}}>
          {errorMessageChildren}
        </ErrorMessage>
      )
    );
    it("it shouldn't crash", () => {
      expect(screen.getByTestId("error-message-container"));
    });
    it("it should display the children component", () => {
      const result = screen.getByTestId("error-message-children").props
        .children;
      expect(result).toBe(errorMessageChildren);
    });
  });
});
