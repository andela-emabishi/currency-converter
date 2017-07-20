import React, {Component} from 'react';
import FromCurrencyInput from '../CurrencyInput/FromCurrencyInput';

class FromCurrencyOption extends Component {

  render() {
    return (
    <div syle={{ 'text-align' : 'left'}}>
      <FromCurrencyInput handleCurrencyValueInput={this.props.handleCurrencyValueInput}/>
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
