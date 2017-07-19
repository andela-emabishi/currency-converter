import React, { Component } from 'react';

import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';
import CurrencyOption from '../CurrencyOption/CurrencyOption';
import SelectedCurrency from '../SelectedCurrency/SelectedCurrency';
import { getCurrencies }  from '../../api/currency';

class ConversionContainer extends Component {
  state = {
    currencies: []
  }

  componentDidMount = () => {
    this.getCurrencyInitials();
  }

  getCurrencyInitials = () => {
    getCurrencies().then(res => {
      this.setState({currencies: Object.keys(res.data.rates)})
    })
  }

  render() {
    return (
      <div>
        <h2>Conversion Container</h2>
        <ConversionDisplay />
        <CurrencyOption currencies={this.state.currencies}/>
        <SelectedCurrency />
      </div>
    );
  }
}

export default ConversionContainer;
