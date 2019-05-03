import React from 'react';

const Tbody =(props)=> {
    let d0 =null,d1,d2,d3,d4,d5 ;
    if(props.entries || props.index){
        d0 = props.entries.name;
        d1 = props.index + 1;
        d2 = props.entries.name;
        d3 = props.entries.score;
        d4 = '';
        d5 = '';
    }else {
        d1 = props.date;
        d2 = props.quizType;
        d3 = props.score;
        d4 = 'X';
        d5 = props.timed ? 'ograniceno vreme' : 'neograniceno vreme'
    }
    return <tbody>
  
  <tr style={props.user === d0 ? {color:'red'} : {color:'black'}}>
        <td>{d1}</td>
        <td>{ d2}
        </td>
        <td>{d3}
        </td>
        <td>{d5}</td>
        <td id={props.id} onClick = {(event)=>{props.delete(event.target.id)}}>{d4}</td>
        </tr>
 </tbody>
}

export default Tbody