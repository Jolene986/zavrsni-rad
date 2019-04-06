import React from 'react'

 const ponudjeniOdgSLIKE =(props) =>{
     let ponudjeniOdg = props.odg;
     ponudjeniOdg.map((item, i) => {
         return (
            <img id = {i}  src= {item} alt="slika"/>
            
         )
     })

  return (
    <div>
      
    </div>
  )
}
export default ponudjeniOdgSLIKE;