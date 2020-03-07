import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import pitanja from './assests/pitanjaData';
import Layout from './hoc/Layout';
import Quiz from './containers/Quiz/Quiz';
import Pocetna from './containers/Pocetna/Pocetna';
import TacniOdg from './components/TacniOdgovori/TacniOdg';
import RangLista from './containers/Rezultati/RangLista';
import TvojiRezultati from './containers/Rezultati/TvojiRezultati';
import Error from './components/Error'

axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    
    nadimak: '' || 'Korisnik',
    timed : false,
    pitanja: pitanja,
    filterPitanja:[],
    tip:''
    
  }
  
  setNadimak = (value)=> {
   this.setState({nadimak:value})
  }
  setTezina = (value)=> {
    if(value === 'Da'){
      this.setState({timed:true})
    }else {
      this.setState({timed:false})
    }
    
  }
  setPitanja = (value,tip)=> {
    
    const novaPitanja = value;
  this.setState({filterPitanja:novaPitanja, tip:tip})
}


  
  
  render() {
  
    return (
      <div className="App">
      
       <Layout>
        <Switch>
        <Route path="/kviz" render={(props) =>  <Quiz  {...props} pitanija = {this.state.filterPitanja}
          tClock = {this.state.timed} tipQ ={this.state.tip}
         ime={this.state.nadimak}/>  }/>
         <Route path="/odgovori" render={(props) =>  <TacniOdg  {...props} pitanija = {this.state.filterPitanja} tip={this.state.tip}/>} />
         <Route path="/tvoji-rezultati" render={(props) =>  <TvojiRezultati  {...props} user={this.state.nadimak} timed={this.state.timed}/>} />
         <Route path="/rang-lista" render={(props) =>  <RangLista  {...props} tipQ={this.state.tip} ime={this.state.nadimak} timed={this.state.timed}/>} />
         <Route path="/" exact render={(props) => <Pocetna {...props} teskost = {this.setTezina}
         stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTip} 
         setujPitanja={this.setPitanja} pitanija={this.state.pitanja} 
         />} />
          <Route component={Error} />
        </Switch>
        
          </Layout>
          
      </div>
    );
  }
}

export default App;
