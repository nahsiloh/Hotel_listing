import { getHotelPrice } from "./HotelPrices";
import { USD } from "../../mockApi/pricesData";

describe("Get hotel price", () => {
  it("should return price not available if price does not exist", () => {
    expect(getHotelPrice(USD, 10)).toBe("Price not available");
  });

  it("should return the USD price of 120 for Shinagawa Prince Hotel", () => {
    expect(getHotelPrice(USD, 1)).toBe(120);
  });
});
