import React, { Component } from 'react'



export default class PodgovorSlike extends Component {
  onClickHendler = (event)=> {
   document.querySelectorAll('#slike > img').forEach(element =>{
     element.style.border ='5px solid transparent';
   })
   event.target.style.borderColor ='green';
    this.props.provera(event.target.alt);
  }
  render() {
    const slika = require('../../../assests/images/'+ this.props.odgovor+'.jpg')
    return (
        <img id = {this.props.id}
         
         src= {slika}
         alt={`slika${this.props.id}`} width = '150' height = '150' style = {{border:'5px solid transparent', borderRadius: 5}}
         
         onClick = {this.onClickHendler}/>
    )
  }
}
