import React, { Component } from 'react'



export default class PodgovorSlike extends Component {
  onClickHendler = (event)=> {
    console.log('iz klik hendlera slike' + event.target.id)
    this.props.provera(event.target.alt)
  }
  render() {
    const slika = require('../../../assests/images/'+ this.props.odgovor+'.jpg')
    return (
        <img id = {this.props.id}
         
         src= {slika}
         alt={`slika${this.props.id}`} width = '150' height = '150'
         onClick = {this.onClickHendler}/>
    )
  }
}
