import React from 'react'
import HintDugme from '../dugmad/hintDugme';

const pitanje =(props)=> {
    return(
    <div>
        <h2>{props.pitanje.pitanje}</h2>
        <p>Ponudjeni Odgovori swich</p>
        <HintDugme/>

    </div>
    )
}
export default pitanje