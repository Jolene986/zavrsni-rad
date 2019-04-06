import React from 'react'

 const ponudjeniOdgCHEKBOX =(props) =>{
     let ponudjeniOdg = props.ponudjeniOdg //  iz stejta this.state.pitanja[curentQuestion].odgovori
     ponudjeniOdg.map(item => {
         return (
            <label className = 'ponudjenOdgovor'>
            <input type= "checkbox" key = {item.id} onChange={} value={}/> 
            </label>
            
         )
     })

  return (
    <div>
      
    </div>
  )
}
export default ponudjeniOdgCHEKBOX;