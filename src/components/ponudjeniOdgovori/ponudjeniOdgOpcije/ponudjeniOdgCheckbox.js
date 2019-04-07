import React from 'react'
import PodgovorCheckbox from '../ponudjeniOdgovor/PodgovorCheckbox';
import Pomocna from '../../../hoc/Pomocna'



 const ponudjeniOdgCheckbox =(props) =>{
    let ponudjeniOdg = props.odg;
    
    const odgovor = ponudjeniOdg.map((item, i) => {return  <PodgovorCheckbox odgovor={item} key={i}/>} )
    
     return ( 
         <Pomocna>{odgovor}</Pomocna>
        )}

export default ponudjeniOdgCheckbox;