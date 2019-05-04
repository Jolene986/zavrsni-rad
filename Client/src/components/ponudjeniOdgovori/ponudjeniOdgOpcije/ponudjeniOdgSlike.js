import React from 'react'
import Pomocna from '../../../hoc/Pomocna'
import PodgovorSlika from '../ponudjeniOdgovor/PodgovorSlika'


 const ponudjeniOdgSlike =(props) =>{
  let ponudjeniOdg = props.odg;
 const odgovor = ponudjeniOdg.map((item, i) =>
  { return  <PodgovorSlika odgovor={item} key={i} id={i} provera={props.provera}/>} )

  return (
    <Pomocna>
      <div id="slike">
    {odgovor}
    </div>
    </Pomocna>
  )
}
export default ponudjeniOdgSlike;





 
    
   
    
   