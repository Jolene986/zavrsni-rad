import React from 'react'

 const ponudjeniOdgINPUT =(props) =>{
     let ponudjeniOdg = props.odg; 
     ponudjeniOdg.map(item => {
         return (
            <label className = 'ponudjenOdgovor'>
            <input type= "text" key = {item} /> 
            </label>
            
         )
     })

  return (
    <div>
      
    </div>
  )
}
export default ponudjeniOdgINPUT;