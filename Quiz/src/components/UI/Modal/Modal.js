import React from 'react'
import classes from './Modal.module.css';
import Pomocna from '../../../hoc/Pomocna';
import Pozadina from '../PozadinaModal/PozadinaModal'

const modal=(props)=> {
  return (
    <Pomocna>
    <Pozadina show = {props.show} clicked = {props.modalClosed}/>
    <div className={[classes.Modal, classes.Rez].join(' ')}
    style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'}}>
      {props.children}
    </div>
    </Pomocna>
  )
}

export default modal