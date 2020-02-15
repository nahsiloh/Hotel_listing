import React from "react";
import HOTELS from "../../mockApi/hotelsData";
import { USD, SGD, CNY, KRW } from "../../mockApi/pricesData";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Hotels.css";

const pricesByCurrency = {
  USD: USD,
  SGD: SGD,
  CNY: CNY,
  KRW: KRW
};

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isHotelPriceDataAvailable = index => {
    if (index >= 0) {
      return true;
    }
  };

  getHotelPriceData = (currency, hotelId) => {
    const currencySelected = pricesByCurrency[currency];
    const index = currencySelected.findIndex(obj => obj.id === hotelId);
    if (this.isHotelPriceDataAvailable(index)) {
      return currencySelected[index];
    }
  };

  getPrice = (currency, hotelId) => {
    const hotelPriceData = this.getHotelPriceData(currency, hotelId);
    return hotelPriceData.price;
  };

  getCompetitors = (currency, hotelId) => {
    const hotelPriceData = this.getHotelPriceData(currency, hotelId);
    if (hotelPriceData.competitors) {
      return Object.entries(hotelPriceData.competitors).map(([key, value]) => (
        <p>
          {key} : {value}
        </p>
      ));
    } else {
      return "Best price available";
    }
  };

  render() {
    return (
      <div>
        {HOTELS.map(hotel => {
          return (
            <Container key={hotel.name}>
              <Row>
                <Col sm={4}>
                  <Image src={hotel.photo} alt={hotel.name} rounded />
                </Col>
                <Col sm={8}>
                  <Row>
                    <Col sm={6}>
                      <h6>{hotel.name}</h6>
                      <p>{hotel.address}</p>
                      <p>Compare rates:</p>
                      <p>
                        {this.getCompetitors(this.props.currency, hotel.id)}
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>rating: {hotel.rating}</p>
                      <p>stars: {hotel.stars}</p>
                      <p>
                        price: {this.props.currency}{" "}
                        {this.getPrice(this.props.currency, hotel.id)}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default Hotels;
