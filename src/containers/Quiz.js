import React, { Component } from 'react'

import Pitanje from '../components/Pitanje/Pitanje';
import Dugme from '../components/UI/dugmad/dugme'
import Modal from '../components/UI/Modal/Modal'
import Rezultat from '../components/Rezultat/Rezultat';



export default class Quiz extends Component {
    state = {
        pitanja: this.props.pitanija,
        datOdgovor: '', 
        trenPitanje: 0,
        poslednjePitanje: false,
        rezultat:0,
        finished: false
      }
      provera =()=>{
        //provera tacnosti i davanje bodova
        let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
        let datOdgovor = this.state.datOdgovor;
        let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;
        console.log('tacan odg je:' + tacanOdg + '  dat odgovor je:'+ datOdgovor)
        if (tacanOdg === datOdgovor){ 
          this.setState(prevState => {return {rezultat: prevState.rezultat + vrednost}})}
          
      
    }

    
    nextDugmeHandler = ()=> {

      this.provera();
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
     setDatOdgovor = (vrednost)=> {
          
       this.setState({datOdgovor : vrednost})
      
      
      }

     vidiRezultat=()=> {
       console.log('vidi rezultat metod opalioo')
         this.provera();
         this.setState({finished:true})
         this.props.setujRezultat(this.state.rezultat);
       }
    setTajm = () => {
      let start = setInterval(this.nextDugmeHandler,5000);
     
      if (this.state.poslednjePitanje) {
        console.log('iz tajmauta state poslednje pitanje je skontao')
         clearInterval(start);
         this.vidiRezultat();
       }
    }
    componentDidMount(){
      //this.setTajm();
    }
    
    /*shouldComponentUpdate(nextProps, nextState){
      if (this.state.poslednjePitanje) {
        return true
      }
      return nextState.trenPitanje !== this.state.trenPitanje;
    }*/
       
  render() {
    //if (this.props.cimanje) {
     //this.setTajm();
    // }
    
    console.log('render')
    let pitanjeKomponenta = 'Pitanje Komponenta';
    const trenPitanje = this.state.pitanja[this.state.trenPitanje];
   
    if (this.state.pitanja.length > 0) {
     pitanjeKomponenta = <Pitanje   
                                  pitanje = {trenPitanje} 
                                  ponudjeniOdg = {trenPitanje.ponudjeniOdg}
                                  tipPitanja = {trenPitanje.tip} 
                                  proveraTacnosti = {this.setDatOdgovor}/>
                                   }
    let dugmeKomponenta = <Dugme btnType='Next' clicked = {this.nextDugmeHandler}>Sledece Pitanje</Dugme>
    if (this.state.poslednjePitanje) {
       dugmeKomponenta = <Dugme btnType='Rezultat'clicked={this.vidiRezultat}>Vidi Rezultat</Dugme>
       
    }
    
    
    
    return (
      <div> 
      {pitanjeKomponenta}
      {dugmeKomponenta}
      <Dugme btnType='Hint'>HINT</Dugme>
      <Modal show={this.state.finished} ><Rezultat bodovi = {this.state.rezultat} nadimak = {this.props.ime}/></Modal>
      </div>
    )
  }
}