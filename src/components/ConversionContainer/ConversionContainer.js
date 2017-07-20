import React, { Component } from 'react';

import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';
import FromCurrencyOption from '../CurrencyOption/FromCurrencyOption';
import ToCurrencyOption from '../CurrencyOption/ToCurrencyOption';
import FromSelectedCurrency from '../SelectedCurrency/FromSelectedCurrency';
import ToSelectedCurrency from '../SelectedCurrency/ToSelectedCurrency';
import { getCurrencies, getRate }  from '../../api/currency';

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

  componentDidUpdate = () => {
    
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

  getToSelectedCurrency = (event) => {
    const selectedToCurrency = event.target.value;
    this.setState({
      selectedToCurrency
    });
  }

  getRate = () => {
    getRate(this.state.selectedFromCurrency).then(res => {
      const conversionRate = res.rates.selectedToCurrency
      this.setState({ rate: conversionRate })
  })
  }
    
  render() {
    return (
      <div>
        <h2>Conversion Container</h2>
        <ConversionDisplay selectedCurrency={this.state.selectedCurrency}/>
        <FromCurrencyOption currencies={this.state.currencies} handleCurrencySelect={this.getFromSelectedCurrency}/>
        <ToCurrencyOption currencies={this.state.currencies} handleCurrencySelect={this.getToSelectedCurrency}/>
        <FromSelectedCurrency selectedCurrency={this.state.selectedFromCurrency}/>
        <ToSelectedCurrency selectedCurrency={this.state.selectedToCurrency}/>
      </div>
    );
  }
}

export default ConversionContainer;
