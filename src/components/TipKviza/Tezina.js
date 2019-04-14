import React, { Component } from 'react'

export default class Tezina extends Component {
    onChangeHandler = (event)=> {
        
this.props.setTezina(event.target.value);
    }
  render() {
    return (
      <div  onChange ={this.onChangeHandler} >
        <label>
        <input type="radio" value = 'Da' 
        name = "tezina"  onChange ={this.onChangeHandler}
        />
        Cimanje
      </label>
      <label>
        <input type="radio" value = 'Ne' 
        name = "tezina" 
        />
        Laganica
      </label>
      </div>
    )
  }
}
