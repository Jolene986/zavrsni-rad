import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Quiz from './containers/Quiz';
import Pocetna from './containers/Pocetna/Pocetna';
import TacniOdg from './components/Rezultat/TacniOdg';
import RangLista from './containers/Rezultati/RangLista';

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
      
       <Layout>
        <Switch>
         <Route path="/kviz" component={Quiz} />
         <Route path="/odgovori" component={TacniOdg } />
         <Route path="/rang-lista" component={RangLista } />
         <Route path="/" render={(props) => <Pocetna {...props} teskost = {this.setTezina}
         stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTipKviza}/>} />
        </Switch>
        
          </Layout>
          
      </div>
    );
  }
}

export default App;
