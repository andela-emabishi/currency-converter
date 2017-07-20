import React, { Component } from 'react';

class FromCurrencyInput extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleCurrencyValueInput}>
        </input>
      </div>
    )
  }
}
export default FromCurrencyInput;