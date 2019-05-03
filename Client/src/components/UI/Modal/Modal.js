import React from 'react'

import Pomocna from '../../../hoc/Pomocna';
import Pozadina from '../PozadinaModal/PozadinaModal'

const modal=(props)=> {
  return (
    <Pomocna>
    <Pozadina show = {props.show} clicked = {props.modalClosed}/>
    <div className={props.className}
    style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'}}>
      {props.children}
    </div>
    </Pomocna>
  )
}

export default modal