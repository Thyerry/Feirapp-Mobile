import { render, screen } from "@testing-library/react-native";
import IconButton from ".";

describe("<IconButton />", () => {
  describe("When it renders", () => {
    const onPressMock = jest.fn();
    beforeEach(() =>
      render(<IconButton name="trash" onPress={onPressMock} size={12} />)
    );
    it("it shouldn't crash", () => {
      expect(screen.getByTestId("icon-button"));
    });
  });
});
