import React, { Component } from 'react'
import Oblast from '../../components/TipKviza/Oblast';

export default class Pocetna extends Component {
  render() {
      const oblasti = ['zivotinje', 'biljke', 'ekologija'].map(item => {
          return <Oblast tezina = {this.props.teskost}
          stejtTezina = {this.props.sttezina}
           snadimak = {this.props.stejtsetNadimak}
            setujTip = {this.props.stejtSetTip}
            oblast = {item}
            id = {item}
            key = {item}
            setNovaPitanja = {this.props.setujPitanja}
            novapitanja={this.props.pitanija}/>
        
      })
     
      
    return (
      <div>
        <div>Uputstva</div>
        <h1>BIOLOŠKI KVIZ</h1>
        <h4>Izaberi oblast</h4>
        {oblasti}

        <button onClick = {()=>this.props.history.push('/kviz')}>Probni ruter buton</button>
      </div>
    )
  }
}
