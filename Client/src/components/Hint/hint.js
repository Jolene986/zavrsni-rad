import React from 'react';
import classes from './Hint.module.css';

const hint =(props)=> {
    return(
    <div className={classes.Hint} style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'}}><p className={classes.Par}>{props.children}</p></div>
 
    )
}
export default hint