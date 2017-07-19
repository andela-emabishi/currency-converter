import React, { Component } from 'react';
import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';
import CurrencyOption from '../CurrencyOption/CurrencyOption';
import SelectedCurrency from '../SelectedCurrency/SelectedCurrency';
import getCurrencies from '../../api/currency';


class ConversionContainer extends Component {
  getCurrencyInitials() {
    getCurrencies.then(result => console.log(Object.keys(result.data.rates)))
  }

  render() {
    console.log(this.getCurrencyInitials());
    return (
      <div>
        <h2>Conversion Container</h2>
        <ConversionDisplay />
        <CurrencyOption getCurrencies={this.getCurrencyInitials}/>
        <SelectedCurrency />
      </div>
    );
  }
}

export default ConversionContainer;
