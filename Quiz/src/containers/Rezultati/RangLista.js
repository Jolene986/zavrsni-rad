import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Tbody from './Tbody';
import OptionSelect from './OptionSelect';


export default class RangLista extends Component {
  state = {
    entries: [],
    filteredRezults:[]
  }

  componentDidMount() {
    axios.get('/api/dataEntries')
      .then(res => {
        console.log(res.data)
        const entries = res.data;
        
        this.setState({ entries : entries});
        this.filterNsort(this.props.tipQ)
      })
  }
  selectFilter = (value)=>{
    this.filterNsort(value);
  }
  filterNsort =(value) => {
    let entries = [...this.state.entries]
    let filteredRezults = entries.filter(entrie => entrie.quizType === value).sort((a,b) =>{
      return b.score - a.score;
  })
    this.setState({filteredRezults: filteredRezults})
  }
  render() {
    let tbody = this.state.filteredRezults.map((entries, index) =>
      <Tbody key={entries._id}
       entries={entries} 
       index = {index}
       user = {this.props.ime}/>)
    
    return (
      <div>
        <OptionSelect selection = {this.selectFilter}/>
        <table >
        <caption>{}</caption>
  <thead>
  
  <tr>
    <th>Rank</th>
    <th>Nadimak</th>
    <th>Osvojeno Bodova</th>
  </tr>
  </thead>
  {tbody}
  
</table>
<p onClick = {()=>this.props.history.push('/tvoji-rezultati')}>Vidi Svoje rezultate</p>
<Link to ='/tvoji-rezultati'>Vidi Svoje Rezultate</Link>
<Link to ='/'>Vrati se na pocetnu stranu</Link>
       
      </div>
    )
  }
}
