import React from 'react';

const ConversionDisplay = (props) => {
  return (
    <div>
      ConversionDisplay
      {props.conversionRate * props.currencyValueInput} {props.selectedToCurrency}
    </div>
  )
}

export default ConversionDisplay;
