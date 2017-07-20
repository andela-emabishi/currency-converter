import React, { Component } from 'react';

import FromCurrencyOption from '../CurrencyOption/FromCurrencyOption';
import ToCurrencyOption from '../CurrencyOption/ToCurrencyOption';
import FromSelectedCurrency from '../SelectedCurrency/FromSelectedCurrency';
import { getCurrencies }  from '../../api/currency';

class ConversionContainer extends Component {
  state = {
    currencies: [],
    selectedFromCurrency: '',
    selectedToCurrency: '',
    rate: ''
  }

  componentDidMount = () => {
    this.getCurrencyInitials();
  }

  getCurrencyInitials = () => {
    getCurrencies().then(res => {
      this.setState({currencies: Object.keys(res.data.rates)})
    })
  }

  getFromSelectedCurrency = (event) => {
    const selectedFromCurrency = event.target.value;
    this.setState({
      selectedFromCurrency
    });
  }
    
  render() {
    return (
      <div>
        <h2>Conversion Container</h2>
        <FromCurrencyOption currencies={this.state.currencies} handleCurrencySelect={this.getFromSelectedCurrency}/>
        <ToCurrencyOption currencies={this.state.currencies} selectedFromCurrency={this.state.selectedFromCurrency} />
        <FromSelectedCurrency selectedCurrency={this.state.selectedFromCurrency}/>
      </div>
    );
  }
}

export default ConversionContainer;
