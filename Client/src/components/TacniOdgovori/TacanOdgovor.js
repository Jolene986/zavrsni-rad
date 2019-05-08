import React from 'react';


export default function TacanOdgovor(props) {
  return (
    <div>
      <h3>{props.pitanje}</h3>
      <p style={{padding:'10px'}}>{props.expl}</p>
      <hr/>
    
    </div>
  )
}
