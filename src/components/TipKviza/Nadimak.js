import React, { Component } from 'react'

export default class Nadimak extends Component {
    onchangeHandler=(event)=> {
        console.log(event.target.value)
        this.props.setujNadimak(event.target.value);
    }
  render() {
    return (
      <input type="text" onChange={this.onchangeHandler} required/>
    )
  }
}

