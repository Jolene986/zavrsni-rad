import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


import Modal from '../UI/Modal/Modal';
import classes from '../UI/Modal/Modal.module.css'
import Pomocna from '../../hoc/Pomocna';
import Tezina from './Tezina';
import Nadimak from './Nadimak';
import classa from './Oblast.module.css'

 class Oblast extends Component {
    state = {
        pokaziOpciju : false,
        tip : ''
        
    }
    pokaziOpciju=(event)=> {
        
        this.setState({pokaziOpciju : true});
       
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
        
        
        this.props.setNovaPitanja(odabranaPitanja,this.state.tip);
        
        
        this.props.history.replace('/kviz')
    }
  render() {
      
    return (
        <Pomocna>
        <Modal show={this.state.pokaziOpciju} modalClosed = {this.odustani} className={classes.Modal}><Tezina setTezina = {this.props.tezina}/>
        <Nadimak setujNadimak = {this.props.snadimak} />
        <button onClick={this.zapocniKviz}  >Zapocni kviz</button>
        </Modal>
         <div className={classa.Div} id = {this.props.id} onClick= {this.pokaziOpciju}>{this.props.oblast}</div>
        </Pomocna>
      
    )
  }
}

export default  withRouter(Oblast);