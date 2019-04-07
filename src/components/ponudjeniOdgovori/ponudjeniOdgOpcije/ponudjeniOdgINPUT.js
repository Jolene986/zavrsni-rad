import React, { Component } from 'react'

export default class ponudjeniOdgInput extends Component {
  onChangeHendler = (event)=> {
    console.log('iz INPUT event hendlera' + event.target.value)
    this.props.provera(event.target.value)
  }
  render() {
    return (
      <input type="text" onChange ={this.onChangeHendler}/>
    )
  }
}
