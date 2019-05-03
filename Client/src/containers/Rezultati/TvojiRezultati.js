import React, {Component} from 'react';
import {Link } from 'react-router-dom';

import Tbody from './Tbody';
import Pomocna from '../../hoc/Pomocna';



export default class TvojiRezultati extends Component {
  state = {
    localResults: []
  }
  componentDidMount(){
    let localResults =  JSON.parse(localStorage.getItem('rezultJSON')) || [];
    if(!(localResults instanceof Array))
    localResults = [localResults]; 

    
    this.setState({localResults:localResults})
  }
  deleteEntrie = (id)=> {
    console.log('id' + id)
    let newLocalResults =this.state.localResults;
    for (let i =0; i< this.state.localResults.length; i++) {
     let localResult = this.state.localResults[i];
     if (localResult.id === id) {
          newLocalResults.splice(i, 1);
      } 
this.setState({localResults : newLocalResults})
  }
  localStorage.setItem('rezultJSON', JSON.stringify(this.state.localResults))
  }
  render()  {
  
    console.log(this.state.localResults)
  let tbody = this.state.localResults.filter(item => item.name === this.props.user).map((item,index) =>
      <Tbody key={index}
       date={item.date} 
       quizType = {item.quizType}
       score = {item.score}
       id={item.id}
       timed = {item.timed}
       delete = {this.deleteEntrie}
       />
 )
  return(
     <Pomocna>
       
 <table >
      
<thead>

<tr>
  <th>Datum</th>
  <th>Oblast</th>
  <th>Bodovi</th>
</tr>
</thead>
{tbody}
</table>
 <Link to ='/'>Vrati se na pocetnu stranu</Link>
</Pomocna>
  )
}
}

   
