import React from 'react'

import PonudjeniOdgCheckbox from './ponudjeniOdgOpcije/ponudjeniOdgCheckbox';
import PonudjeniOdgInput from './ponudjeniOdgOpcije/ponudjeniOdgInput';
import PonudjeniOdgSlike from './ponudjeniOdgOpcije/ponudjeniOdgSlike';
import Pomocna from '../../hoc/Pomocna'

const ponudjeniOdgovoriSwic =(props)=> {
    let ponudjenOdg = null;
    switch(props.tip){
        case ('success'):
        ponudjenOdg = <PonudjeniOdgCheckbox odg = {props.ponudjeniOdg}/>
        break; 
        case ('danger'):
        ponudjenOdg = <PonudjeniOdgInput odg = {props.ponudjeniOdg}/>
        break; 
        case ('warning'):
        ponudjenOdg = <PonudjeniOdgSlike odg = {props.ponudjeniOdg} />
        break; 
        case ('info'):
        ponudjenOdg = 'DND komponenta'
        break; 
        default: ponudjenOdg = null;
    }
    return(
        <Pomocna>{ponudjenOdg}</Pomocna>
        
   
    )
}
export default ponudjeniOdgovoriSwic