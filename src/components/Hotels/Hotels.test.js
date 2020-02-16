import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hotels from "./Hotels";

describe("Hotels display", () => {
  it("should render the hotel name", () => {
    const { getByText, getByTestId } = render(<Hotels currency="USD" />);
    expect(getByText("Shinagawa Prince Hotel")).toBeInTheDocument();
  });

  it("should show the USD price for prince hotel", () => {
    const { getByText } = render();
  });
});
