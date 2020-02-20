import React from "react";
import "./App.css";
import Hotels from "../Hotels/Hotels";
import NavBar from "../NavBar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "USD",
      priceDataByCurrency: []
    };
  }

  componentDidMount() {
    this.fetchData(this.state.currency);
  }

  componentDidUpdate = async (prevprops, prevstate) => {
    if (this.state.currency !== prevstate.currency) {
      await this.fetchData(this.state.currency);
    }
  };

  fetchData(currency) {
    fetch(
      `http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/${currency}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState(state => {
          return { priceDataByCurrency: data };
        })
      );
  }

  checkCurrency = currency => {
    this.setState({ currency });
  };

  render() {
    return (
      <div className="App">
        <NavBar checkCurrency={this.checkCurrency} />
        <Hotels
          currency={this.state.currency}
          priceDataByCurrency={this.state.priceDataByCurrency}
        />
      </div>
    );
  }
}

export default App;
