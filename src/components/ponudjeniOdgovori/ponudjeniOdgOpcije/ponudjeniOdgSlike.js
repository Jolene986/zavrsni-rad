import React from 'react'

 const ponudjeniOdgSLIKE =(props) =>{
     let ponudjeniOdg = props.ponudjeniOdg //  iz stejta this.state.pitanja[curentQuestion].odgovori
     ponudjeniOdg.map((item, i) => {
         return (
            <img id = {i} onClick={} src= {item} alt="#"/>
            
         )
     })

  return (
    <div>
      
    </div>
  )
}
export default ponudjeniOdgSLIKE;