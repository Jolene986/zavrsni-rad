import React, { Component } from "react";

export default class ponudjeniOdgInput extends Component {
  onChangeHendler = event => {
    this.props.provera(event.target.value.toLowerCase().trim());
  };
  render() {
    return (
      <input
        spellCheck={false}
        type="text"
        onChange={this.onChangeHendler}
        style={{
          padding: "12px",
          fontSize: "17px",
          marginTop: "60px",
          fontFamily: "inherit"
        }}
      />
    );
  }
}
