import React from "react";
import "./HotelPrices.css";
import { Container } from "react-bootstrap";

const isHotelPriceDataAvailable = index => {
  if (index >= 0) {
    return true;
  }
};

const getHotelPriceData = (currencyPriceData, hotelId) => {
  const index = currencyPriceData.findIndex(obj => obj.id === hotelId);
  if (isHotelPriceDataAvailable(index)) {
    return currencyPriceData[index];
  }
};

export const getHotelPrice = (currencyPriceData, hotelId) => {
  const hotelPriceData = getHotelPriceData(currencyPriceData, hotelId);
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

export const getCompetitorsPrice = (currencyPriceData, hotelId, currency) => {
  const hotelPriceData = getHotelPriceData(currencyPriceData, hotelId);
  const priceOnSite = getHotelPrice(currencyPriceData, hotelId);

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
          {currency}
          {isStrikethroughRate(priceOnSite, value)}
          {displaySavings(priceOnSite, value)}
        </div>
      </Container>
    ));
  } else {
    return <p>Best price available here</p>;
  }
};

export const getTaxAndFees = (currencyPriceData, hotelId) => {
  const hotelPriceData = getHotelPriceData(currencyPriceData, hotelId);
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
