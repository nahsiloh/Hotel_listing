import React from "react";
import { USD, SGD, CNY, KRW } from "../../mockApi/pricesData";
import "./HotelPrices.css";
import { Container } from "react-bootstrap";

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
    return <p>save: {savings}%</p>;
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
      <Container id="container__competitorPrices">
        <div id="div__competitorPrices" key={key}>
          <p id="competitorName">{key}</p>
          {isStrikethroughRate(priceOnSite, value)}
          {displaySavings(priceOnSite, value)}
        </div>
      </Container>
    ));
  } else {
    return <p>Best price available here</p>;
  }
};

export const getTaxAndFees = (currency, hotelId) => {
  const hotelPriceData = getHotelPriceData(currency, hotelId);
  if (hotelPriceData && hotelPriceData.taxes_and_fees) {
    return (
      <div>
        <span id="tax_and_fees">*price is tax-inclusive</span>
        <div id="tax_and_fees_popup">
          {Object.entries(hotelPriceData.taxes_and_fees).map(([key, value]) => (
            <p>
              {key} : ${value}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return;
};
