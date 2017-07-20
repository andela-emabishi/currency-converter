import React, { Component } from 'react';

import FromCurrencyOption from '../CurrencyOption/FromCurrencyOption';
import ToCurrencyOption from '../CurrencyOption/ToCurrencyOption';
import FromSelectedCurrency from '../SelectedCurrency/FromSelectedCurrency';
import { getCurrencies }  from '../../api/currency';

class ConversionContainer extends Component {
  state = {
    currencies: [],
    currencyValueInput: '',
    selectedFromCurrency: '',
    selectedToCurrency: '',
    rate: ''
  }

  componentDidMount = () => {
    this.getCurrencyInitials();
  }

  handleCurrencyValueInput = (event) => {
    const currencyValueInput = event.target.value;
    this.setState({ currencyValueInput });
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
        <h2 style={{ 'text-align': 'center'}}>Currency Converter</h2>
        <FromCurrencyOption currencies={this.state.currencies} handleCurrencySelect={this.getFromSelectedCurrency} handleCurrencyValueInput={this.handleCurrencyValueInput}/>
        <FromSelectedCurrency selectedCurrency={this.state.selectedFromCurrency}/>
        <ToCurrencyOption currencies={this.state.currencies} selectedFromCurrency={this.state.selectedFromCurrency} currencyValueInput={this.state.currencyValueInput}/>
      </div>
    );
  }
}

export default ConversionContainer;
