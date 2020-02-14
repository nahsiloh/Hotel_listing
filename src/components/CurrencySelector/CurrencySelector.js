import React from "react";
import { Dropdown } from "react-bootstrap";

const CURRENCIES = ["USD", "SGD", "CNY", "KRW"];

const CurrencySelector = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Select Currency</Dropdown.Toggle>
        <Dropdown.Menu>
          {CURRENCIES.map(currency => (
            <Dropdown.Item key={currency}>{currency}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CurrencySelector;
