import React from "react";

import classes from "./Uputstvo.module.css";
import Pozadina from "../UI/PozadinaModal/PozadinaModal";
import Pomocna from "../../hoc/Pomocna";
import Logo from "../Logo/Logo";

const uputstvo = props => {
  let klase = [classes.Uputstvo, classes.Closed];
  if (props.open) {
    klase = [classes.Uputstvo, classes.Open];
  }

  return (
    <Pomocna>
      <Pozadina show={props.open} clicked={props.closed} />
      <div className={klase.join(" ")}>
        <Logo width="100px" height="100px" />
        <p>
          Klikom na izabranu oblast otvara se iskačući prozor na kome odabirate
          težinu kviza - ograničeno(90 sekundi) ili neograničeno vreme, zatim
          upisujete nadimak,i pritiskom na dugme započinjete kviz.
        </p>
        <p>Pitanja nose različit broj bodova u zavisnosti od težine pitanja </p>
        <p>Bodovanje:</p>
        <p>
          <span style={{ color: "hsl(348, 100%, 61%)" }}>Crvena</span> pitanja
          nose 24 bodova
        </p>
        <p>
          <span style={{ color: "hsl(204, 86%, 53%)" }}>Plava</span> pitanja
          nose 16 bodova
        </p>
        <p>
          <span style={{ color: "hsl(48, 100%, 67%)" }}>Žuta</span> pitanja nose
          8 bodova
        </p>
        <p>
          <span style={{ color: "hsl(141, 71%, 48%)" }}>Zelena</span> pitanja
          nose 4 boda
        </p>
        <p>Maksimalan broj bodova je: 64</p>
        <p>
          Pritiskom na{" "}
          <span style={{ color: "hsl(348, 100%, 61%)" }}>HINT</span> dugme
          pojavljuje se majmunče Đole koji Vam pomaže u selekciji odgovora!
          Koristite ga pažljivo jer vam oduzima 25% od vrednosti koje nosi to
          pitanje
        </p>
        <p>
          Ako je neophodno molim Vas unostite latinična slova (ć,č,š,ž,đ) u
          suprotnom odgovor neće biti priznat kao tačan
        </p>
      </div>
    </Pomocna>
  );
};
export default uputstvo;
