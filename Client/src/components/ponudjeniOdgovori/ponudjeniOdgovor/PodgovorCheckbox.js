import React, { Component } from "react";
import classes from "./Radio.module.css";

export default class PodgovorCheckbox extends Component {
  onChangeHendler = event => {
    if (event.target.checked) {
      this.props.provera(event.target.value);
    }
  };

  render() {
    return (
      <div className={classes.Div}>
        <input
          type="radio"
          value={this.props.odgovor}
          onChange={this.onChangeHendler}
          name="cekovi"
          className={[classes.optionInput, classes.radio].join(" ")}
        />
        <label className={classes.Label}>{this.props.odgovor}</label>
      </div>
    );
  }
}
