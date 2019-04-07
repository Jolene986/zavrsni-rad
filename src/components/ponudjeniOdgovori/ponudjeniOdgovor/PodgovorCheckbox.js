import React, { Component } from 'react'

export default class PodgovorCheckbox extends Component {
  onChangeHendler = (event)=> {
    this.props.provera(event.target.value)
  }
  render() {
    return (
      <label>
        <input type="checkbox" value = {this.props.odgovor} onChange ={this.onChangeHendler}/>
        {this.props.odgovor}
      </label>
    )
  }
}
