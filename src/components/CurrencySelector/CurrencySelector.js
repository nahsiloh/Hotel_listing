import React from "react";
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
        <select onChange={this.changeCurrency}>
          {CURRENCIES.map(cur => (
            <option value={cur}>{cur}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default CurrencySelector;
