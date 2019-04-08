import React, { Component } from 'react'

export default class PodgovorCheckbox extends Component {
  onChangeHendler = (event)=> {
    //console.log('iz event hendlera' + event.target.value)
     if (event.target.checked) {
      this.props.provera(event.target.value)
     }
      
    }
    
  
  render() {
    return (
      <label>
        <input type="radio" value = {this.props.odgovor} 
        onChange ={this.onChangeHendler} 
        name = "cekovi"
        />
        {this.props.odgovor}
      </label>
    )
  }
}
