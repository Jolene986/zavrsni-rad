import React from 'react'

import Pomocna from '../../../hoc/Pomocna';
import Pozadina from '../PozadinaModal/PozadinaModal'

const modal=(props)=> {
  return (
    <Pomocna>
    <Pozadina show = {props.show} clicked = {props.modalClosed}/>
    <div className={props.className}
    style={{display: props.show ? 'block' : 'none'}}>
      {props.children}
    </div>
    </Pomocna>
  )
}

export default modal