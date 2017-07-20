import React from 'react';

const FromCurrencyOption = (props) => {
  return (
    <div>
      FromCurrencyOption
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

export default FromCurrencyOption;
