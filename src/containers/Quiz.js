import React, { Component } from 'react'
import pitanja from '../assests/pitanjaData';
import Pitanje from '../components/Pitanje/Pitanje';
import NextDugme from '../components/dugmad/nextDugme';
import RezDugme from '../components/dugmad/rezultatDugme';


export default class Quiz extends Component {
    state = {
        pitanja: pitanja,
        datOdgovor: '', 
        trenPitanje: 0,
        poslednjePitanje: false,
        rezultat:0
      }
      nextDugmeHandler =()=>{
      
      //koji je br trenutno pitanje
      let pitanjeBr = this.state.trenPitanje;
      // ukupan br pitanja
      let ukupanBrPitanja = this.state.pitanja.length;
      pitanjeBr ++
      // ako je br pitanja veci od indexa trenutnog pitanja setujemo stejt da prebaci na sledece
      if (ukupanBrPitanja > pitanjeBr) {
        //setujemo stejt
        this.setState(prevState => {return {trenPitanje: prevState.trenPitanje +1}});
        //a ako je to poslednje pitanje
        if (ukupanBrPitanja === pitanjeBr +1) {
          this.setState({poslednjePitanje:true}) 
        }
      }
      let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
      console.log('this.state.datOdgovor na next dugmetu  ' + this.state.datOdgovor)
      if (tacanOdg === this.state.datOdgovor) {
        console.log('tacno');
      }
      else console.log('netacno');
      
    }
     proveraTacnostiMetod = (vrednost)=> {
        let datOdgovor = vrednost;
       this.setState({datOdgovor:datOdgovor})
       console.log('iz provera tacnosti metod' +this.state.datOdgovor);}
       
  render() {
    let pitanjeKomponenta = 'Pitanje Komponenta';
    const trenPitanje = this.state.pitanja[this.state.trenPitanje];
   
    if (this.state.pitanja.length > 0) {
     pitanjeKomponenta = <Pitanje   
                                  pitanje = {trenPitanje} 
                                  ponudjeniOdg = {trenPitanje.ponudjeniOdg}
                                  tipPitanja = {trenPitanje.tip} 
                                  proveraTacnosti = {this.proveraTacnostiMetod}/>
                                   }
    let dugmeKomponenta = <NextDugme  slPitanje = {this.nextDugmeHandler} />
    if (this.state.poslednjePitanje) {
       dugmeKomponenta = <RezDugme/>
    }
    return (
      <div> 
      {pitanjeKomponenta}
      {dugmeKomponenta}
      
      </div>
    )
  }
}