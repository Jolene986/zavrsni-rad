import React, { Component } from 'react'

export default class OptionSelect extends Component {

    onSelectHandler=(event)=>{
        this.props.selection(event.target.value)
    }
  render() {
    return (
        <select onChange={this.onSelectHandler}>
        <option disabled  defaultValue> -- Odaberi Oblast -- </option>
        <option value="zivotinje">ZIVOTINJE</option>
        <option value="biljke">BILJKE</option>
        <option value="genetika">GENETIKA</option>
        
      </select>
    )
  }
}
