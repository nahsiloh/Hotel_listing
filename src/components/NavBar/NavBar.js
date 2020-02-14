import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.css";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>Ascenda</Navbar.Brand>
      <CurrencySelector />
    </Navbar>
  );
};

export default NavBar;
