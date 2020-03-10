import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Error.module.css'
import logo from '../assests/images/slike/logo.jpg'

 const Error = () => {
    return (
        <div className={classes.Error}>
            <img src={logo}/>
            <h1>404 Greska</h1>
            <Link to='/'>Vrati se na pocetnu stranu da zapocnes kviz</Link>
        </div>
    )
}

export default Error