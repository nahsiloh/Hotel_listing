import React from "react";
import HOTELS from "../../mockApi/hotelsData";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Hotels.css";
import { getHotelPrice, getCompetitorsPrice } from "../HotelPrices/HotelPrices";

class Hotels extends React.Component {
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
                      {getCompetitorsPrice(this.props.currency, hotel.id)}
                    </Col>
                    <Col sm={6}>
                      <p>rating: {hotel.rating}</p>
                      <p>stars: {hotel.stars}</p>
                      <p data-testid={hotel.name}>
                        price: {this.props.currency}{" "}
                        {getHotelPrice(this.props.currency, hotel.id)}
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
