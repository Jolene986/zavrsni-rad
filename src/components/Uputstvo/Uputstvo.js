import React from 'react';

import classes from './Uputstvo.module.css';
import Pozadina from '../UI/PozadinaModal/PozadinaModal';
import Pomocna from '../../hoc/Pomocna';
import Logo from '../../components/Logo/Logo';

const uputstvo = (props)=>{
  let klase = [classes.Uputstvo, classes.Closed];
  if(props.open){
    klase = [classes.Uputstvo, classes.Open];
  }

    return(
      <Pomocna>
        <Pozadina show = {props.open} clicked={props.closed}/>
        <div className={klase.join(' ')}>
          <Logo width="100px" height="100px" />
          <p>Oblast birate klikom na nju</p>
          <p>Tezina kviza vreme bla bla</p>
          <p>Bodovanje:</p>
          <p><span style={{ color: 'red' }}>Crvena</span> pitanja nose 20 bodova</p>
          <p><span style={{ color: 'yellow' }}>Žuta</span> pitanja nose 10 bodova</p>
          <p><span style={{ color: 'green' }}>Zelena</span> pitanja nose 5 bodova</p>
          <p>Maximalan broj bodova je: 100</p>
          <p>Ako je neophodno molim Vas unostite latinična slova (ć,č,š,ž,đ) u suprotnom odgovor neće biti priznat kao tačan</p>
       </div>
      </Pomocna>
    )
}
export default uputstvo