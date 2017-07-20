import React, { Component } from 'react';
import ToSelectedCurrency from '../SelectedCurrency/ToSelectedCurrency';
import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';
import { getRate } from  '../../api/currency';

class ToCurrencyOption extends Component {
  state = {
    selectedToCurrency: '',
    conversionRate: ''
  }

  handleCurrencySelect = (event) => {
    const selectedToCurrency = event.target.value;
     this.setState({
      selectedToCurrency,
    });
    getRate(this.props.selectedFromCurrency, selectedToCurrency).then(res => this.setState({ conversionRate: res }))
  }

  render() {
    return (
      <div>
        ToCurrencyOption
        <select onChange={this.handleCurrencySelect}>
        <option value=" ">CUR</option>
          {this.props.currencies.map((currency, index) =>
            <option value={currency} key={currency}>{currency}</option>
          )
          }
        </select>
        <ToSelectedCurrency selectedToCurrency={this.state.selectedToCurrency} />
        {this.state.conversionRate.length !== 0 ? <ConversionDisplay conversionRate={this.state.conversionRate} currencyValueInput={this.props.currencyValueInput}/> : null}
      </div>
    )
  }
}

export default ToCurrencyOption;
