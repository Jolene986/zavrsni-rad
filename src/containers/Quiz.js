import React, { Component } from 'react'
import pitanja from '../assests/pitanjaData';
import Pitanje from '../components/Pitanje/Pitanje';
import Dugme from '../components/dugmad/dugme'
import Modal from '../components/UI/Modal/Modal'
import Rezultat from '../components/Rezultat/Rezultat'


export default class Quiz extends Component {
    state = {
        pitanja: pitanja,
        datOdgovor: '', 
        trenPitanje: 0,
        poslednjePitanje: false,
        rezultat:0
      }
      nextDugmeHandler =()=>{
        //provera tacnosti i davanje bodova
        let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
        let datOdgovor = this.state.datOdgovor;
        let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;
        console.log('tacan odg je:' + tacanOdg + '  dat odgovor je:'+ datOdgovor)
        if (tacanOdg === datOdgovor){ 
          this.setState(prevState => {return {rezultat: prevState.rezultat + vrednost}})}
          this.sledecePitanje();
      
    }
    sledecePitanje = ()=> {
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
    }
     proveraTacnostiMetod = (vrednost)=> {
        //let datOdgovor = vrednost;
        console.log('vrednost koju prima provera tacnosti metod' + vrednost)
       this.setState({datOdgovor : vrednost})
      // console.log('iz provera tacnosti metod' +this.state.datOdgovor);
      
      }

       vidiRezultat=()=> {
         //provera tacnosti i davanje bodova
        let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
        if (tacanOdg === this.state.datOdgovor){ 
          this.setState(prevState => {return {rezultat: prevState.rezultat +1}})}
         console.log('sa vidi rez dugmeta' + this.state.rezultat)
       }
       
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
    let dugmeKomponenta = <Dugme btnType='Next' clicked = {this.nextDugmeHandler}>Sledece Pitanje</Dugme>
    if (this.state.poslednjePitanje) {
       dugmeKomponenta = <Dugme btnType='Rezultat'clicked={this.vidiRezultat}>Vidi Rezultat</Dugme>
       
    }
    console.log('iz rendera ' + this.state.rezultat)
    return (
      <div> 
      {pitanjeKomponenta}
      {dugmeKomponenta}
      <Dugme btnType='Hint'>HINT</Dugme>
      <Modal><Rezultat bodovi = {this.state.rezultat}/></Modal>
      </div>
    )
  }
}