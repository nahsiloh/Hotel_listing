import React from "react";
import "./CurrencySelector.css";
const CURRENCIES = ["USD", "SGD", "CNY", "KRW"];

class CurrencySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeCurrency = event => {
    this.props.checkCurrency(event.target.value);
  };

  render() {
    return (
      <div>
        <p>Select currency:</p>
        <select data-testid="currency_selector" onChange={this.changeCurrency}>
          {CURRENCIES.map(cur => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CurrencySelector;
