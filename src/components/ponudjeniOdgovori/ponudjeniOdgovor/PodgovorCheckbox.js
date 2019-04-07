import React, { Component } from 'react'

export default class PodgovorCheckbox extends Component {
  
  render() {
    return (
      <label >
    <input type="checkbox" value ={this.props.odgovor}/> 
    {this.props.odgovor}
    </label>
    )
  }
}
