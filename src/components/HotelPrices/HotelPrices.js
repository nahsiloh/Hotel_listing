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

const isCheaper = (priceOnSite, competitorPrice) => {
  if (competitorPrice > priceOnSite) {
    return true;
  }
};

const calculateSavings = (priceOnSite, competitorPrice) => {
  if (isCheaper(priceOnSite, competitorPrice)) {
    return Math.floor(
      ((competitorPrice - priceOnSite) / competitorPrice) * 100
    );
  }
};

const displaySavings = (priceOnSite, competitorPrice) => {
  const savings = calculateSavings(priceOnSite, competitorPrice);
  if (savings > 0) {
    return <p>savings: {savings}%</p>;
  }
};

const isStrikethroughRate = (priceOnSite, competitorPrice) => {
  if (isCheaper(priceOnSite, competitorPrice)) {
    return <strike>{competitorPrice}</strike>;
  } else {
    return competitorPrice;
  }
};

export const getCompetitorsPrice = (currency, hotelId) => {
  const hotelPriceData = getHotelPriceData(currency, hotelId);
  const priceOnSite = getHotelPrice(currency, hotelId);

  if (hotelPriceData && hotelPriceData.competitors) {
    const priceArray = Object.entries(hotelPriceData.competitors);
    priceArray.push(["Us", priceOnSite]);

    const sortPrices = priceArray.sort((a, b) => {
      return [a[1]] - [b[1]];
    });

    return sortPrices.map(([key, value]) => (
      <div key={key}>
        <p>
          {key} : {isStrikethroughRate(priceOnSite, value)}
        </p>
        {displaySavings(priceOnSite, value)}
      </div>
    ));
  } else {
    return "Best price available here";
  }
};
