import React from 'react'
import logoSlika from '../../assests/images/slike/logo.jpg'

const logo =(props)=> {
  return (
    <img src={logoSlika} alt="logo" style={{width:props.width, height:props.height}}/>
  )
}
export default logo