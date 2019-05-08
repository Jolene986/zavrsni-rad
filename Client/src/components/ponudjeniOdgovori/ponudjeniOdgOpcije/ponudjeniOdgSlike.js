import React from "react";

import PodgovorSlika from "../ponudjeniOdgovor/PodgovorSlika";
import classes from "./Slike.module.css";

const ponudjeniOdgSlike = props => {
  let ponudjeniOdg = props.odg;
  const odgovor = ponudjeniOdg.map((item, i) => {
    return (
      <PodgovorSlika odgovor={item} key={i} id={i} provera={props.provera} />
    );
  });

  return (
    <div id="slike" className={classes.FlexDiv}>
      {odgovor}
    </div>
  );
};
export default ponudjeniOdgSlike;
