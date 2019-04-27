import React from 'react';
import classes from './Dugmad.module.css'

const dugme = (props)=> (
<button
className = {[classes.Dugme, classes[props.btnType]].join(' ')}
onClick = {props.clicked} disabled={props.disable}>{props.children}</button>
);
export default dugme;
