import React from 'react';

const ConversionDisplay = (props) => {
  return (
    <div>
      ConversionDisplay
      {props.conversionRate * props.currencyValueInput}
    </div>
  )
}

export default ConversionDisplay;
