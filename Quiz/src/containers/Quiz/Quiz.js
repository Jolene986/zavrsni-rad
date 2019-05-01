import React, { Component } from 'react';
import axios from 'axios';


import Pitanje from '../../components/Pitanje/Pitanje';
import Dugme from '../../components/UI/dugmad/dugme'
import Modal from '../../components/UI/Modal/Modal'
import Rezultat from '../../components/Rezultat/Rezultat';
import Hint from '../../components/Hint/hint';
import classes from './Quiz.module.css'



export default class Quiz extends Component {
    state = {
        pitanja: this.props.pitanija,
        datOdgovor: '', 
        trenPitanje: 0,
        poslednjePitanje: false,
        isDisabled:false,
        showHint:false,
        rezultat:0,
        finished: false
      }
      provera =(funkc)=>{
        //provera tacnosti i davanje bodova
        let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
        let datOdgovor = this.state.datOdgovor;
        let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;
       
        if (tacanOdg === datOdgovor){ 
          this.setState(prevState => {return {rezultat: prevState.rezultat + vrednost}},funkc)
        }else {
          this.setState(prevState => {return {rezultat: prevState.rezultat + 0}},funkc)
        }
          
      
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
        this.setState(prevState => {return {trenPitanje: prevState.trenPitanje +1}});
        //a ako je to poslednje pitanje
        if (ukupanBrPitanja === pitanjeBr +1) {
          this.setState({poslednjePitanje:true}) 
        }
      }
      //vracamo hint na false
      this.hintstateToggler();
      this.setState()
    }
     setDatOdgovor = (vrednost)=> {
          
       this.setState({datOdgovor : vrednost})
      
      
      }
      hintHandler =()=>{
        
        let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;
        this.setState(prevState => {return {rezultat: prevState.rezultat - vrednost /4,
          showHint : true,
          isDisabled : true}})
      }
      hintstateToggler =()=>{
        this.setState( 
         {showHint : false,
            isDisabled : false}
         )
      }
      posalji=()=> {
        // u bazu
        let dataEntry = {
          name : this.props.ime,
          score: this.state.rezultat,
          quizType: this.props.tipQ
        };
        axios.post(`/api/dataEntries`, dataEntry, { withCredentials: true } )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => console.log(err));
        // u Local
        let localRezults =  JSON.parse(localStorage.getItem('rezultJSON')) || [];
        let result = {...dataEntry, date : new Date().toJSON().slice(0,10).split('-').reverse().join('/')}
        console.log(localRezults)
        localRezults.push(result);
        localStorage.setItem('rezultJSON', JSON.stringify(localRezults))
        } 
    
      
    

      
      
     vidiRezultat=()=> {
       
         this.provera(this.posalji);
         this.setState({finished:true})
         
          
        
       }
 
    
    /*shouldComponentUpdate(nextProps, nextState){
      if (this.state.poslednjePitanje) {
        return true
      }
      return nextState.trenPitanje !== this.state.trenPitanje;
    }*/
       
  render() {
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
      <div className={[classes.Quiz, classes[this.props.tipQ] ].join(' ')}> 
      {pitanjeKomponenta}
      {dugmeKomponenta}
      <Dugme disable={this.state.isDisabled} btnType='Hint' clicked = {this.hintHandler}>HINT</Dugme>
     {/*<Hint show = {this.state.showHint}>{trenPitanje.hint}</Hint>*/ } 
      <Modal show={this.state.finished} ><Rezultat bodovi = {this.state.rezultat} nadimak = {this.props.ime}/></Modal>
      </div>
    )
  }
}