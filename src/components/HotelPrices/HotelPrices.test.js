import { getHotelPrice } from "./HotelPrices";

describe("Get hotel price", () => {
  it("should return price not available if price does not exist", () => {
    expect(getHotelPrice("USD", 10)).toBe("Price not available");
  });

  it("should return the USD price of 120 for Shinagawa Prince Hotel", () => {
    expect(getHotelPrice("USD", 1)).toBe(120);
  });

  it("should return the SGD price of 164 for Shinagawa Prince Hotel", () => {
    expect(getHotelPrice("SGD", 1)).toBe(164);
  });
});
