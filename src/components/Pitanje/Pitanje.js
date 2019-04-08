import React from 'react'
import Dugme from '../dugmad/dugme';
import PonudjeniOdgovoriSwic from '../ponudjeniOdgovori/ponudjeniOdgovoriSwic';

const pitanje =(props)=> {
    return(
    <div>
        <h2>{props.pitanje.pitanje}</h2>
        <PonudjeniOdgovoriSwic tip = {props.tipPitanja}
         ponudjeniOdg ={props.ponudjeniOdg} 
         provera = {props.proveraTacnosti}
        />
        <Dugme btnType='Hint'>HINT</Dugme>

    </div>
    )
}
export default pitanje