import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrencySelector from "./CurrencySelector";

describe("Currency selector", () => {
  it("should render the currency selector", () => {
    const { getByTestId } = render(<CurrencySelector />);
    expect(getByTestId("currency_selector")).toBeInTheDocument();
  });

  it("should be able to select the currency", () => {
    const checkCurrency = jest.fn().mockImplementation();
    const { getByTestId, getByText } = render(
      <CurrencySelector checkCurrency={checkCurrency} />
    );
    const getSelector = getByTestId("currency_selector");
    fireEvent.change(getSelector, { target: { value: "SGD" } });
    expect(getByText("SGD")).toBeInTheDocument();
  });
});
