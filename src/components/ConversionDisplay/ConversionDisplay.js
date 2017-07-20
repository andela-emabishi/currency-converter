import React from 'react';

const ConversionDisplay = (props) => {
  return (
    <div style={{ 'text-align': 'center' }}>
      {props.conversionRate * props.currencyValueInput} {props.selectedToCurrency}
    </div>
  )
}

export default ConversionDisplay;
