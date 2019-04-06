import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout';
import Quiz from './containers/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout><Quiz/></Layout>
      </div>
    );
  }
}

export default App;
