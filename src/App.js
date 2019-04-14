import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout';
//import Quiz from './containers/Quiz';
import Pocetna from './containers/Pocetna/Pocetna'

class App extends Component {
  state = {
    tipKviza: '',
    nadimak: '',
    tezak : false,
    bodovi: 0
  }
  setTipKviza = (value)=> {
    this.setState({tipKviza:value})
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
  setBodovi = (value)=> {
    this.setState({bodovi:value})
  }
  
  render() {
    
    return (
      <div className="App">
      
      <button onClick = {this.pokaziNadimak}>nadimak</button>
       <Layout>
         <Pocetna teskost = {this.setTezina}
          sttezina = {this.state.tezak} 
          stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTipKviza}/>
          </Layout>
      </div>
    );
  }
}

export default App;
