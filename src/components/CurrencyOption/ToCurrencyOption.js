import React from 'react';

const ToCurrencyOption = (props) => {
  return (
    <div>
      CurrencyOption
      <select onChange={props.handleCurrencySelect}>
      <option value=" ">CUR</option>
        {props.currencies.map((currency, index) =>
          <option value={currency} key={currency}>{currency}</option>
        )
        }
      </select>
    </div>
  )
}

export default ToCurrencyOption;
