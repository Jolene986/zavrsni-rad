import React from 'react'

import PonudjeniOdgCheckbox from './ponudjeniOdgOpcije/ponudjeniOdgCheckbox';
import PonudjeniOdgInput from './ponudjeniOdgOpcije/ponudjeniOdgInput';
import PonudjeniOdgSlike from './ponudjeniOdgOpcije/ponudjeniOdgSlike';
import PonudjenOdgDnD from './ponudjeniOdgOpcije/ponudjeniOdgDnD';
import Pomocna from '../../hoc/Pomocna'

const ponudjeniOdgovoriSwic =(props)=> {
    let ponudjenOdg = null;
    switch(props.tip){
        case ('success'):
        ponudjenOdg = <PonudjeniOdgCheckbox odg = {props.ponudjeniOdg} provera = {props.provera}/>
        break; 
        case ('danger'):
        ponudjenOdg = <PonudjeniOdgInput odg = {props.ponudjeniOdg} provera = {props.provera}/>
        break; 
        case ('warning'):
        ponudjenOdg = <PonudjeniOdgSlike odg = {props.ponudjeniOdg} provera = {props.provera}/>
        break; 
        case ('info'):
        ponudjenOdg = <PonudjenOdgDnD odg = {props.ponudjeniOdg} provera = {props.provera}/>
        break; 
        default: ponudjenOdg = null;
    }
    return(
        <Pomocna>{ponudjenOdg}</Pomocna>
        
   
    )
}
export default ponudjeniOdgovoriSwic