import React, { Component } from 'react';
import classes from './OptionSelect.module.css';

export default class OptionSelect extends Component {

    onSelectHandler=(event)=>{
        this.props.selection(event.target.value)
    }
  render() {
    return (
        <select className={classes.Select} onChange={this.onSelectHandler} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled> -- Odaberi Oblast -- </option>
        <option value="životinje">ZIVOTINJE</option>
        <option value="biljke">BILJKE</option>
        <option value="čovek">ČOVEK</option>
        
      </select>
    )
  }
}
