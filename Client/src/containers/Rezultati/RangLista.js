import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Tbody from "./Tbody";
import OptionSelect from "./OptionSelect";
import classes from "./RangLista.module.css";

export default class RangLista extends Component {
  state = {
    entries: [],
    filteredRezults: []
  };

  componentDidMount() {
    axios.get("/api/dataEntries").then(res => {
      const entries = res.data;

      this.setState({ entries: entries });
      this.filterNsort(this.props.tipQ, this.props.timed);
    });
  }
  selectFilter = value => {
    this.filterNsort(value, this.props.timed);
  };
  filterNsort = (value, value2) => {
    let entries = [...this.state.entries];
    let filteredRezults = entries
      .filter(entrie => entrie.quizType === value)
      .filter(entrie => entrie.timed === value2)
      .sort((a, b) => {
        return b.score - a.score;
      });
    this.setState({ filteredRezults: filteredRezults });
  };
  render() {
    let tbody = this.state.filteredRezults.map((entries, index) => (
      <Tbody
        key={entries._id}
        entries={entries}
        index={index}
        user={this.props.ime}
      />
    ));

    return (
      <div>
        <div className={classes.Nav}>
          <Link to="/"> &larr; Početna strana</Link>
          <Link to="/tvoji-rezultati">Tvoji Rezultati</Link>
          <Link to="/odgovori">Tačni Odgovori</Link>
        </div>
        <div className={classes.Wrapper}>
          <OptionSelect selection={this.selectFilter} />
          <table className={classes.Table}>
            <caption>
              {this.state.filteredRezults[0]
                ? this.state.filteredRezults[0].quizType.toUpperCase()
                : null}
            </caption>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Nadimak</th>
                <th>Osvojeno Bodova</th>
              </tr>
            </thead>
            <tbody>{tbody}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
