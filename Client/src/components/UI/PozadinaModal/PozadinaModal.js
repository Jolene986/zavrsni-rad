import React from 'react';
import classes from './PozadinaModal.module.css'

const pozadinaModala = (props)=> (
   props.show ? <div className = {classes.Pozadina} onClick = {props.clicked}></div> : null
);

export default pozadinaModala;