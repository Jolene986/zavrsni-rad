import React from 'react'

 const ponudjeniOdgINPUT =(props) =>{
     let ponudjeniOdg = props.ponudjeniOdg //  iz stejta this.state.pitanja[curentQuestion].odgovori
     ponudjeniOdg.map(item => {
         return (
            <label className = 'ponudjenOdgovor'>
            <input type= "text" key = {item} onChange={} value={}/> 
            </label>
            
         )
     })

  return (
    <div>
      
    </div>
  )
}
export default ponudjeniOdgINPUT;