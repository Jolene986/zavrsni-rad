import React, { Component } from 'react'

export default class PodgovorSlike extends Component {
  render() {
    return (
        <img src= {this.props.odgovor} alt="slika" width = '300' height = '300'/>
    )
  }
}
