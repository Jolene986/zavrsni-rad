import React from "react";
import { Link } from "react-router-dom";
import TacanOdgovor from "./TacanOdgovor";
import classes from "./TacniOdgovori.module.css";

export default function TacniOdg(props) {
  let odg = props.pitanija.map(item => {
    return (
      <TacanOdgovor key={item.id} pitanje={item.pitanje} expl={item.obj} />
    );
  });
  return (
    <div className={classes.Wrap}>
      <div>
        <div className={classes.Nav}>
          <Link to="/"> &larr; Početna strana</Link>
          <Link to="/rang-lista">Rang Lista</Link>
          <Link to="/tvoji-rezultati">Tvoji Rezultati</Link>
        </div>

        <h2 style={{ marginTop: "61px" }}>
          Tačni Odgovori za oblast:{" "}
          <span style={{ color: "hsl(348, 100%, 61%)" }}>{props.tip}</span>
        </h2>
        <div className={classes.Odg}> {odg}</div>
      </div>
    </div>
  );
}
