import React, { Component } from 'react'



export default class PodgovorCheckbox extends Component {

  onChangeHandler = (event)=> {
    this.props.provera(event.target.value);
  }
  render() {
    return (
      <label >
    <input type="checkbox" value ={this.props.odgovor} onChange={this.onChangeHandler}/> 
    {this.props.odgovor}
    </label>
    )
  }
}
