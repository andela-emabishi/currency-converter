import React, {Component} from 'react';
import FromCurrencyInput from '../CurrencyInput/FromCurrencyInput';

class FromCurrencyOption extends Component {
  state = {
    currencyValueInput: ''
  }

   handleCurrencyValueInput = (event) => {
    const currencyValueInput = event.target.value;
    this.setState({ currencyValueInput })
   }

  render() {
    return (
    <div>
      FromCurrencyOption
      <FromCurrencyInput handleCurrencyValueInput={this.handleCurrencyValueInput}/>
      <select onChange={this.props.handleCurrencySelect}>
      <option value=" ">CUR</option>
        {this.props.currencies.map((currency, index) =>
          <option value={currency} key={currency}>{currency}</option>
        )
        }
      </select>
    </div>
    )
  }
}

export default FromCurrencyOption;
