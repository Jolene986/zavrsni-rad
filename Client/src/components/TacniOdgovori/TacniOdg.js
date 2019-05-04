import React from 'react';
import {Link} from 'react-router-dom';
import TacanOdgovor from './TacanOdgovor';

export default function TacniOdg(props) {
 let odg = props.pitanija.map(item => {return <TacanOdgovor key={item.id} pitanje={item.pitanje} expl ={item.obj} />
})
  return (
    <div>
     <h2>Tačni Odgovori za oblast: {props.tip}</h2>
    {odg}
    <Link to='/rang-lista'>Vidi rang listu</Link>
    </div>
  )
}
