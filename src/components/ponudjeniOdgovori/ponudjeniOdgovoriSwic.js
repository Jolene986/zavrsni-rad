import React from 'react'
import Pomocna from '../../hoc/Pomocna';

const ponudjeniOdgovoriSwic =(props)=> {
    let ponudjenOdg = null;
    switch(props.tipPitanja){
        case ('success'):
        ponudjenOdg = 'cekbox komponenta'
        break; 
        case ('danger'):
        ponudjenOdg = 'input text komponenta'
        break; 
        case ('warning'):
        ponudjenOdg = 'slike komponenta'
        break; 
        case ('info'):
        ponudjenOdg = 'DND komponenta'
        break; 
        default: ponudjenOdg = null;
    }
    return(
        <Pomocna>ponudjenOdg</Pomocna>
   
    )
}
export default ponudjeniOdgovoriSwic