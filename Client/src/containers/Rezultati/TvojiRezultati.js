import React, { Component } from "react";
import { Link } from "react-router-dom";

import Tbody from "./Tbody";
import classes from "./TvojiRezultati.module.css";

export default class TvojiRezultati extends Component {
  state = {
    localResults: []
  };
  componentDidMount() {
    let localResults = JSON.parse(localStorage.getItem("rezultJSON")) || [];
    if (!(localResults instanceof Array)) localResults = [localResults];

    this.setState({ localResults: localResults });
  }
  deleteEntrie = id => {
    let newLocalResults = this.state.localResults;
    for (let i = 0; i < this.state.localResults.length; i++) {
      let localResult = this.state.localResults[i];
      if (localResult.id === id) {
        newLocalResults.splice(i, 1);
      }
      this.setState({ localResults: newLocalResults });
    }
    localStorage.setItem("rezultJSON", JSON.stringify(this.state.localResults));
  };
  render() {
    let tbody = this.state.localResults
      .filter(item => item.name === this.props.user)
      .map((item, index) => (
        <Tbody
          key={index}
          date={item.date}
          quizType={item.quizType}
          score={item.score}
          id={item.id}
          timed={item.timed}
          delete={this.deleteEntrie}
        />
      ));
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Nav}>
          <Link to="/">&larr; Početna</Link>
          <Link to="/odgovori">Tačni Odgovori</Link>
          <Link to="/rang-lista">Rang Lista</Link>
        </div>

        <div style={{ marginTop: "60px" }}>
          <h1>{this.props.user}</h1>
          <table className={classes.Table}>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Oblast</th>
                <th>Bodovi</th>
                <th>Težina</th>
                <th>Izbriši</th>
              </tr>
            </thead>
            <tbody>{tbody}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
