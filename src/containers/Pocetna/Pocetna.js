import React, { Component } from 'react';

import Oblast from '../../components/TipKviza/Oblast';
import Uputstvo from '../../components/Uputstvo/Uputstvo';
 import UputstvoToggle from '../../components/Uputstvo/UputstvoToggle';

export default class Pocetna extends Component {
  state = {
    uputstvoShow: false
  }
  uputstvoOpenHandler =()=>{
    this.setState({uputstvoShow:true})
}

  uputstvoClosedHandler =()=>{
      this.setState({uputstvoShow:false})
  }

  render() {
      const oblasti = ['zivotinje', 'biljke', 'genetika'].map(item => {
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
        <UputstvoToggle clicked = {this.uputstvoOpenHandler}/>
        <Uputstvo open={this.state.uputstvoShow} closed = {this.uputstvoClosedHandler} />
        <h1>BIOLOŠKI KVIZ</h1>
        <h4>Izaberi oblast</h4>
        {oblasti}
      </div>
    )
  }
}
