import React, { Component } from "react";

export default class PodgovorSlika extends Component {
  onClickHendler = event => {
    document.querySelectorAll("#slike > img").forEach(element => {
      element.style.border = "5px solid transparent";
    });
    event.target.style.borderColor = "hsl(141, 71%, 48%)";
    this.props.provera(event.target.alt);
  };
  render() {
    const slika = require("../../../assests/images/imagesQuiz/" +
      this.props.odgovor +
      ".jpg");
    return (
      <img
        src={slika}
        alt={`slika${this.props.id}`}
        width="150"
        height="150"
        style={{ border: "5px solid transparent", borderRadius: 5 }}
        onClick={this.onClickHendler}
      />
    );
  }
}
