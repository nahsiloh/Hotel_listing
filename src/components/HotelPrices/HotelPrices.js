import React from "react";
import { USD, SGD, CNY, KRW } from "../../mockApi/pricesData";

const pricesByCurrency = {
  USD: USD,
  SGD: SGD,
  CNY: CNY,
  KRW: KRW
};

const isHotelPriceDataAvailable = index => {
  if (index >= 0) {
    return true;
  }
};

const getHotelPriceData = (currency, hotelId) => {
  const currencySelected = pricesByCurrency[currency];
  const index = currencySelected.findIndex(obj => obj.id === hotelId);
  if (isHotelPriceDataAvailable(index)) {
    return currencySelected[index];
  }
};

export const getHotelPrice = (currency, hotelId) => {
  const hotelPriceData = getHotelPriceData(currency, hotelId);
  if (hotelPriceData && hotelPriceData.price) {
    return hotelPriceData.price;
  } else {
    return "Price not available";
  }
};

export const getCompetitorsPrice = (currency, hotelId) => {
  const hotelPriceData = getHotelPriceData(currency, hotelId);
  if (hotelPriceData && hotelPriceData.competitors) {
    const priceArray = Object.entries(hotelPriceData.competitors);
    priceArray.push(["Ascenda", getHotelPrice(currency, hotelId)]);

    const sortPrices = priceArray.sort((a, b) => {
      return [a[1]] - [b[1]];
    });

    return sortPrices.map(([key, value]) => (
      <p>
        {key} : {value}
      </p>
    ));
  } else {
    return "Best price available";
  }
};
