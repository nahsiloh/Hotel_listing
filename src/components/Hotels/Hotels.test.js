import React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hotels from "./Hotels";
import { USD } from "../../mockApi/pricesData";

describe("Hotels display", () => {
  it("should render the hotels", async () => {
    const { getByText } = render(
      <Hotels currency="USD" priceDataByCurrency={USD} />
    );
    await wait(() => {
      getByText("Shinagawa Prince Hotel");
    });
    expect(getByText("Shinagawa Prince Hotel")).toBeInTheDocument();
  });
});
