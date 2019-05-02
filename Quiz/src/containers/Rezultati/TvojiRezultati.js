import React from 'react';
import {Link } from 'react-router-dom';

import Tbody from './Tbody';
import Pomocna from '../../hoc/Pomocna';

const TvojiRezultati =(props)=> {
    let localRezults =  JSON.parse(localStorage.getItem('rezultJSON'));
    console.log(localRezults)
    let tbody = localRezults.filter(item => item.name === props.user).map((item,index) =>
        <Tbody key={index}
         date={item.date} 
         quizType = {item.quizType}
         score = {item.score}/>
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
export default TvojiRezultati