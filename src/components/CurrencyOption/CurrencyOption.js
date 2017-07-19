import React, { Component } from 'react';

class CurrencyOption extends Component {
  render() {
    // console.log('letters', this.props.getCurrencies);
    return (
      <div>
        CurrencyOption
        <select>
          {this.props.getCurrencies.map((currency, index) => {
            <option value="currency">currency</option>
          })
          }
        </select>
      </div>
    )
  }
}

export default CurrencyOption;

// getRate('USD').then(result => console.log(result))
// getRate('USD').then(result => console.log(result))
// getRate('USD').then(result => console.log(Object.keys(result.data.rates))) // Array of currency names
