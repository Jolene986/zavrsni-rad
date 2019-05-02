import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import pitanja from './assests/pitanjaData';
import Layout from './hoc/Layout';
import Quiz from './containers/Quiz/Quiz';
import Pocetna from './containers/Pocetna/Pocetna';
import TacniOdg from './components/Rezultat/TacniOdg';
import RangLista from './containers/Rezultati/RangLista';
import TvojiRezultati from './containers/Rezultati/TvojiRezultati'

axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    
    nadimak: '' || 'Korisnice',
    tezak : false,
    pitanja: pitanja,
    filterPitanja:[],
    tip:''
    
  }
  
  setNadimak = (value)=> {
   this.setState({nadimak:value})
  }
  setTezina = (value)=> {
    if(value === 'Da'){
      this.setState({tezak:true})
    }else {
      this.setState({tezak:false})
    }
    
  }
  setPitanja = (value,tip)=> {
    
    const novaPitanja = value;
  this.setState({filterPitanja:novaPitanja, tip:tip})
}


  /*setBodovi = (value,)=> {
    this.setState({bodovi:value})
  }*/
  
  render() {
  
    return (
      <div className="App">
      
       <Layout>
        <Switch>
        <Route path="/kviz" render={(props) =>  <Quiz  {...props} pitanija = {this.state.filterPitanja}
          cimanje = {this.state.tezak} tipQ ={this.state.tip}
         ime={this.state.nadimak}/>  }/>
         <Route path="/odgovori" component={TacniOdg } />
         <Route path="/tvoji-rezultati" render={(props) =>  <TvojiRezultati  {...props} user={this.state.nadimak}/>} />
         <Route path="/rang-lista" render={(props) =>  <RangLista  {...props} tipQ={this.state.tip} ime={this.state.nadimak}/>} />
         <Route path="/" exact render={(props) => <Pocetna {...props} teskost = {this.setTezina}
         stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTip} 
         setujPitanja={this.setPitanja} pitanija={this.state.pitanja} 
         />} />
        </Switch>
        
          </Layout>
          
      </div>
    );
  }
}

export default App;
