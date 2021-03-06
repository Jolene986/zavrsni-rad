import React from "react";

import classes from "./Pitanje.module.css";
import PonudjeniOdgovoriSwic from "../ponudjeniOdgovori/ponudjeniOdgovoriSwic";

const pitanje = props => {
  return (
    <div
      
      className={[classes.Div, classes[props.tipPitanja]].join(" ")}
    >
      <h2>{props.pitanje.pitanje}</h2>
      <PonudjeniOdgovoriSwic
        tip={props.tipPitanja}
        ponudjeniOdg={props.ponudjeniOdg}
        provera={props.proveraTacnosti}
      />
    </div>
  );
};
export default pitanje;
