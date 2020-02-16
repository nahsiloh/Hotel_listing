import React from "react";
import HOTELS from "../../mockApi/hotelsData";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Hotels.css";
import {
  getHotelPrice,
  getCompetitorsPrice,
  getTaxAndFees
} from "../HotelPrices/HotelPrices";

class Hotels extends React.Component {
  render() {
    return (
      <div>
        {HOTELS.map(hotel => {
          return (
            <Container key={hotel.name}>
              <Row>
                <Col md={4}>
                  <Image src={hotel.photo} alt={hotel.name} rounded />
                </Col>
                <Col md={8}>
                  <Row>
                    <Col md={10} xs={9}>
                      <h6>{hotel.name}</h6>
                      <p id="hotel__address">{hotel.address}</p>
                      <p>Compare rates:</p>
                      <Row className="competitor_prices">
                        {getCompetitorsPrice(this.props.currency, hotel.id)}
                      </Row>
                    </Col>
                    <Col md={2} xs={3}>
                      <div id="hotel__rating">
                        <p>{hotel.rating}</p>
                      </div>
                      <p>{hotel.stars} stars</p>
                      <div id="hotel__price">
                        <p data-testid={hotel.name}>
                          {this.props.currency}{" "}
                          {getHotelPrice(this.props.currency, hotel.id)}
                        </p>
                        {getTaxAndFees(this.props.currency, hotel.id)}
                      </div>
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
