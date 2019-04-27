import React from 'react';
import {withRouter} from 'react-router-dom';
import Pomocna from '../../hoc/Pomocna'

 const rezultat =(props)=> {
  return (
    <Pomocna>
      <h1>{props.nadimak}</h1>
        <h3> Vas razultat je</h3>
        <h1 style = {{color:'red'}}>{props.bodovi}</h1>
        <p onClick = {()=>props.history.push('/odgovori')}>Vidi tacne odgovore</p>
        <p onClick = {()=>props.history.push('/rang-lista')}>Vidi Rang listu</p>
    </Pomocna>
  )
}
export default withRouter(rezultat);