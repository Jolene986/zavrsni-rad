import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Error.module.css'

 const Error = () => {
    return (
        <div className={classes.Error}>
            <h1>404 Greska</h1>
            <Link to='/'>Vrati se na pocetnu stranu da zapocnes kviz</Link>
        </div>
    )
}

export default Error