import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.css";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="justify-content-between">
        <Navbar.Brand>Ascenda</Navbar.Brand>
        <CurrencySelector checkCurrency={this.props.checkCurrency} />
      </Navbar>
    );
  }
}

export default NavBar;
