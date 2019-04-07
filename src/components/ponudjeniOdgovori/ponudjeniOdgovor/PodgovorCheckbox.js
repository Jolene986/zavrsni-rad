import React from 'react'

export default function pOdgovorCheckbox(props) {

    return (
      <label >
    <input type="checkbox" value ={props.odgovor}/> 
    {props.odgovor}
    </label>
  )
}
