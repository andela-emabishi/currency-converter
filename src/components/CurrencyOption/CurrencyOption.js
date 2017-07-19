import React from 'react';

const CurrencyOption = (props) =>  {
    return (
      <div>
        CurrencyOption
        <select>
          {props.currencies.map((currency, index) =>
            <option value="currency" key={currency}>{currency}</option>
          )
          }
        </select>
      </div>
    )
}

export default CurrencyOption;
