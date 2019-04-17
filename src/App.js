import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import pitanja from './assests/pitanjaData';

import './App.css';
import Layout from './components/Layout';
import Quiz from './containers/Quiz';
import Pocetna from './containers/Pocetna/Pocetna';
import TacniOdg from './components/Rezultat/TacniOdg';
import RangLista from './containers/Rezultati/RangLista';

class App extends Component {
  state = {
    
    nadimak: '' || 'Korisnice',
    tezak : false,
    pitanja: pitanja,
    bodovi: 0
  }
  
  setNadimak = (value)=> {
    let nadimak = value;
    this.setState({nadimak:nadimak})
  }
  setTezina = (value)=> {
    if(value === 'Da'){
      this.setState({tezak:true})
    }else {
      this.setState({tezak:false})
    }
    
  }
  setPitanja = (value)=> {
    
    const novaPitanja = value;
  this.setState({pitanja:novaPitanja})
}

  setBodovi = (value)=> {
    this.setState({bodovi:value})
  }
  
  render() {
   
    return (
      <div className="App">
      
       <Layout>
        <Switch>
        <Route path="/kviz" render={(props) =>  <Quiz  {...props} pitanija = {this.state.pitanja}
         setujRezultat={this.setBodovi} cimanje = {this.state.tezak}
         ime={this.state.nadimak}/>  }/>
         <Route path="/odgovori" component={TacniOdg } />
         <Route path="/rang-lista" render = {(props)=> <RangLista {...props} bodovi={this.state.bodovi} /> } />
         <Route path="/" render={(props) => <Pocetna {...props} teskost = {this.setTezina}
         stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTipKviza} 
         setujPitanja={this.setPitanja} pitanija={this.state.pitanja}/>} />
        </Switch>
        
          </Layout>
          
      </div>
    );
  }
}

export default App;
