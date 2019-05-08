import React from "react";
import { withRouter, Link } from "react-router-dom";
import Pomocna from "../../hoc/Pomocna";
import classes from "./Rezultat.module.css";

const rezultat = props => {
  return (
    <Pomocna>
      <h1 style={{ marginTop: "65px" }}>{props.nadimak}</h1>
      <h3> Vas razultat je</h3>
      <h1
        style={{
          color: "red",
          fontSize: "40px",
          textShadow: "0 5.6px 7.896px #de2028, 0 2px 1px"
        }}
      >
        {props.bodovi < 0 ? 0 : props.bodovi}
      </h1>
      <p
        className={classes.Par}
        onClick={() => props.history.push("/odgovori")}
      >
        Vidi tacne odgovore
      </p>
      <p
        className={classes.Par}
        onClick={() => props.history.push("/rang-lista")}
      >
        Vidi Rang listu
      </p>
      <Link className={classes.Link} to="/">
        Vrati se na pocetak
      </Link>
    </Pomocna>
  );
};
export default withRouter(rezultat);
