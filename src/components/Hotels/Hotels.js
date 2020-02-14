import React from "react";
import HOTELS from "../../mockApi/hotelsData";
import { USD } from "../../mockApi/pricesData";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Hotels.css";

const Hotels = () => {
  const getPrice = (currency, hotelId) => {
    const index = currency.findIndex(obj => obj.id === hotelId);
    return currency[index].price;
  };

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
                  </Col>
                  <Col sm={6}>
                    <p>rating: {hotel.rating}</p>
                    <p>stars: {hotel.stars}</p>
                    <p>price: {getPrice(USD, hotel.id)}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Hotels;
