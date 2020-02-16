import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

describe("Navbar", () => {
  it("should render company name", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Ascenda")).toBeInTheDocument();
  });
});
