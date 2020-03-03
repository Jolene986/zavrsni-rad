import React, { Component } from "react";
import classes from "./Tezina.module.css";

export default class Tezina extends Component {
  onChangeHandler = event => {
    this.props.setTezina(event.target.value);
  };
  render() {
    return (
      <div onChange={this.onChangeHandler} className={classes.DivLabel}>
        <label
          
          className={classes.Label}
        >
          <input
            type="radio"
            value="Da"
            name="tezina"
            className={[classes.optionInput, classes.radio].join(" ")}
          />
          Ograničeno vreme
        </label>
        <label className={classes.Label}>
          <input
            type="radio"
            value="Ne"
            name="tezina"
            className={[classes.optionInput, classes.radio].join(" ")}
          />
          Neograničeno vreme
        </label>
      </div>
    );
  }
}
