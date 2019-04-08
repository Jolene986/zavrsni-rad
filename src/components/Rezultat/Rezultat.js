import React from 'react'
import Pomocna from '../../hoc/Pomocna'

 const rezultat =(props)=> {
  return (
    <Pomocna>
        <h3>Vas razultat je</h3>
        <h1 style = {{color:'red'}}>{props.bodovi}</h1>
        <p>Vidi tacne odgovore</p>
        <p>Vidi rezultate</p>
    </Pomocna>
  )
}
export default rezultat