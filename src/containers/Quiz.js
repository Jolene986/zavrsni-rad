import React, { Component } from 'react'
import pitanja from '../assests/pitanjaData';


export default class Quiz extends Component {
    state = {
        pitanja: pitanja,
        ponudjeniOdg: '', 
        currentQuestion: 0,
        lastQuestion: false,
        rezultat:0
      }
  render() {
    return (
      <div> 
          
        pitanje komponenta
        sledece pitanje dugme
      </div>
    )
  }
}
