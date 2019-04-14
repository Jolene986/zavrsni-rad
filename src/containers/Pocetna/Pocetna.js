import React, { Component } from 'react'
import Oblast from '../../components/TipKviza/Oblast';

export default class Pocetna extends Component {
  render() {
      const oblasti = ['Zivotinje', 'Biljke', 'Ekologija'].map(item => {
          return <Oblast tezina = {this.props.teskost}
          stejtTezina = {this.props.sttezina}
           snadimak = {this.props.stejtsetNadimak}
            setujTip = {this.props.stejtSetTip}
            oblast = {item}
            id = {item}
            key = {item}/>
        
      })
    return (
      <div>
        <div>Uputstva</div>
        <h1>BIOLOŠKI KVIZ</h1>
        <h4>Izaberi oblast</h4>
        {oblasti}
      </div>
    )
  }
}
