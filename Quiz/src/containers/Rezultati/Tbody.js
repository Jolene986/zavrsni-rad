import React from 'react';

const Tbody =(props)=> {
    let d0 =null,d1,d2,d3 ;
    if(props.entries || props.index){
        d0 = props.entries.name;
        d1 = props.index + 1;
        d2 = props.entries.name;
        d3 = props.entries.score
    }else {
        d1 = props.date;
        d2 = props.quizType;
        d3 = props.score;
    }
    return <tbody>
  
    <tr style={props.user === d0 ? {color:'red'} : {color:'black'}}>
        <td>{d1}</td>
        <td>{ d2}
        </td>
        <td>{d3}
        </td>
        </tr>
 </tbody>
}

export default Tbody