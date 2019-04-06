import React, { Component } from 'react'
import pitanja from '../assests/pitanjaData';
import Pitanje from '../components/Pitanje/Pitanje';
import NextDugme from '../components/dugmad/nextDugme';


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
      <Pitanje />
      <NextDugme />
      </div>
    )
  }
}
