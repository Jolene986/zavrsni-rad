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
          fontSize: "17px",
          marginTop: "15px",
          fontFamily: "inherit",
          padding: "15px 2px",
    textAlign: "center",
    border: "2px solid #84ac1f",
    width:'70%',
    borderRadius: "13px"
        }}
      />
    );
  }
}
