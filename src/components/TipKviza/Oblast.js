import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Modal from '../UI/Modal/Modal';
import Pomocna from '../../hoc/Pomocna';
import Tezina from './Tezina';
import Nadimak from './Nadimak';


 class Oblast extends Component {
    state = {
        pokaziOpciju : false,
        tip : ''
        
    }
    pokaziOpciju=(event)=> {
        
        this.setState({pokaziOpciju : true});
       // this.props.setujTip(event.target.id)
       this.setState({tip : event.target.id});
       
    }
    odustani =()=> {
        this.setState({pokaziOpciju : false})
    }
    zapocniKviz = ()=>{
        const odabranaPitanja = this.props.novapitanja.filter(pitanje => {
            return pitanje.tipKviza === this.state.tip
        }
        )
        
        
        this.props.setNovaPitanja(odabranaPitanja);
        console.log('zapocni kviz' )
        
        this.props.history.replace('/kviz')
    }
  render() {
      
    return (
        <Pomocna>
        <Modal show={this.state.pokaziOpciju} modalClosed = {this.odustani}><Tezina setTezina = {this.props.tezina}/>
        <Nadimak setujNadimak = {this.props.snadimak} />
        <button onClick={this.zapocniKviz} id="lalal" >Zapocni kviz</button>
        </Modal>
         <div id = {this.props.id} onClick= {this.pokaziOpciju}>{this.props.oblast}</div>
        </Pomocna>
      
    )
  }
}

export default  withRouter(Oblast);