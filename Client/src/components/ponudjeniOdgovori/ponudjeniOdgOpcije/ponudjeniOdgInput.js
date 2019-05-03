import React, { Component } from 'react'

export default class ponudjeniOdgInput extends Component {
  onChangeHendler = (event)=> {
   
    this.props.provera(event.target.value.toLowerCase().trim())
  }
  render() {
    return (
      <input type="text" onChange ={this.onChangeHendler} />
    )
  }
}
