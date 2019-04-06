import React from 'react'

import PonudjeniOdgCHEKBOX from './ponudjeniOdgOpcije/ponudjeniOdgCHEKBOX';
import PonudjeniOdgINPUT from './ponudjeniOdgOpcije/ponudjeniOdgINPUT';
import PonudjeniOdgSLIKE from './ponudjeniOdgOpcije/ponudjeniOdgSLIKE';

const ponudjeniOdgovoriSwic =(props)=> {
    let ponudjenOdg = null;
    switch(props.tip){
        case ('success'):
        ponudjenOdg = <PonudjeniOdgCHEKBOX odg = {props.ponudjeniOdg}/>
        break; 
        case ('danger'):
        ponudjenOdg = <PonudjeniOdgINPUT odg = {props.ponudjeniOdg}/>
        break; 
        case ('warning'):
        ponudjenOdg = <PonudjeniOdgSLIKE odg = {props.ponudjeniOdg} />
        break; 
        case ('info'):
        ponudjenOdg = 'DND komponenta'
        break; 
        default: ponudjenOdg = null;
    }
    return(
        {ponudjenOdg}
   
    )
}
export default ponudjeniOdgovoriSwic