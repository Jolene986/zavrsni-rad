import React from 'react'
import Pomocna from '../../../hoc/Pomocna'
import PodgovorSlike from '../ponudjeniOdgovor/PodgovorSlike'


 const ponudjeniOdgSlike =(props) =>{
  let ponudjeniOdg = props.odg;
 const odgovor = ponudjeniOdg.map((item, i) =>
  { return  <PodgovorSlike odgovor={item} key={i} id={i} provera={props.provera}/>} )

  return (
    <Pomocna>{odgovor}</Pomocna>
  )
}
export default ponudjeniOdgSlike;





 
    
   
    
   