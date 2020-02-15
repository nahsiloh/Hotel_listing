import React from "react";
import "./App.css";
import Hotels from "../Hotels/Hotels";
import NavBar from "../NavBar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "USD"
    };
  }

  checkCurrency = currency => {
    this.setState({ currency });
  };

  render() {
    return (
      <div className="App">
        <NavBar checkCurrency={this.checkCurrency} />
        <Hotels currency={this.state.currency} />
      </div>
    );
  }
}

export default App;
