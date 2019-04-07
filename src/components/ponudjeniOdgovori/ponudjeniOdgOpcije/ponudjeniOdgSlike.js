import React from 'react'
import Pomocna from '../../../hoc/Pomocna'
import PodgovorSlike from '../ponudjeniOdgovor/PodgovorSlike'


 const ponudjeniOdgSlike =(props) =>{
  let ponudjeniOdg = props.odg;
 const odgovor = ponudjeniOdg.map((item, i) => { return  <PodgovorSlike odgovor={item} key={i}/>} )

  return (
    <Pomocna>{odgovor}</Pomocna>
  )
}
export default ponudjeniOdgSlike;





 
    
   
    
   