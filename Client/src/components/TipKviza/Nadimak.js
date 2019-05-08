import React, { Component } from "react";

export default class Nadimak extends Component {
  onchangeHandler = event => {
    this.props.setujNadimak(event.target.value);
  };
  render() {
    return (
      <input
        spellCheck="false"
        type="text"
        onChange={this.onchangeHandler}
        placeholder={"Upišite vaš nadimak"}
        style={{
          padding: "12px",
          fontSize: "17px",
          marginTop: "15px",
          fontFamily: "inherit"
        }}
      />
    );
  }
}
