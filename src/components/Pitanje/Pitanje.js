import React from 'react'
import HintDugme from '../dugmad/hintDugme';
import PonudjeniOdgovoriSwic from '../ponudjeniOdgovori/ponudjeniOdgovoriSwic';

const pitanje =(props)=> {
    return(
    <div>
        <h2>{props.pitanje.pitanje}</h2>
        <PonudjeniOdgovoriSwic tip = {props.tipPitanja} ponudjeniOdg ={props.ponudjeniOdg}/>
        <HintDugme/>

    </div>
    )
}
export default pitanje