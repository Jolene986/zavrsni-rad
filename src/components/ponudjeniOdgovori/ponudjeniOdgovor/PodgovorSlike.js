import React, { Component } from 'react'

export default class PodgovorSlike extends Component {
  onClickHendler = (event)=> {
    console.log('iz klik hendlera slike' + event.target.id)
    this.props.provera(event.target.value)
  }
  render() {
    return (
        <img id = {this.props.id}
         src= {this.props.odgovor} 
         alt="slika" width = '300' height = '300'
         onClick = {this.onClickHendler}/>
    )
  }
}
