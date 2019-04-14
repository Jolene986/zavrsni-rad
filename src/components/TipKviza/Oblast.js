import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import Pomocna from '../../hoc/Pomocna';
import Tezina from './Tezina';
import Nadimak from './Nadimak';


export default class Oblast extends Component {
    state = {
        pokaziOpciju : false,
        
    }
    pokaziOpciju=(event)=> {
        
        this.setState({pokaziOpciju : true});
        this.props.setujTip(event.target.id)
    }
    odustani =()=> {
        this.setState({pokaziOpciju : false})
    }
    prikazStanja = ()=>{
        console.log('klik radi' + +this.props.stejtTezina)
    }
  render() {
      
    return (
        <Pomocna>
        <Modal show={this.state.pokaziOpciju} modalClosed = {this.odustani}><Tezina setTezina = {this.props.tezina}/>
        <Nadimak setujNadimak = {this.props.snadimak} />
        <button onClick = {this.prikazStanja}>Zapocni kviz</button>
        </Modal>
         <div id = {this.props.id} onClick= {this.pokaziOpciju}>{this.props.oblast}</div>
        </Pomocna>
      
    )
  }
}
