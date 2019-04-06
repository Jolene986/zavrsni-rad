import React from 'react'

 const ponudjeniOdgCHEKBOX =(props) =>{
     let ponudjeniOdg = props.ponudjeniOdg //  iz stejta this.state.pitanja[curentQuestion].odgovori
     ponudjeniOdg.map(item => {
         return (
            <label className = 'ponudjenOdgovor'>
            <input type= "checkbox" key = {item} onChange={} value={item}/> {/*i key je item jer je to samo jedan ponudjen odg*/ }
            </label>
            
         )
     })
}
export default ponudjeniOdgCHEKBOX;