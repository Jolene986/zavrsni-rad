import React from 'react';
import Tbody from './Tbody';

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

    )
}
export default TvojiRezultati