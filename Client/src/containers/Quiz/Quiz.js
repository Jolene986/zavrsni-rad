import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Pitanje from "../../components/Pitanje/Pitanje";
import Dugme from "../../components/UI/dugmad/dugme";
import Modal from "../../components/UI/Modal/Modal";
import Rezultat from "../../components/Rezultat/Rezultat";
import Hint from "../../components/Hint/hint";
import classes from "./Quiz.module.css";
import clasa from "../../components/UI/Modal/Modal.module.css";

export default class Quiz extends Component {
  state = {
    pitanja: this.props.pitanija,
    datOdgovor: "",
    trenPitanje: 0,
    poslednjePitanje: false,
    isDisabled: false,
    showHint: false,
    rezultat: 0,
    finished: false,
    width: 100
  };

  provera = funkc => {
    let tacanOdg = this.state.pitanja[this.state.trenPitanje].tacanOdg;
    let datOdgovor = this.state.datOdgovor;
    let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;

    if (tacanOdg === datOdgovor) {
      this.setState(prevState => {
        return { rezultat: prevState.rezultat + vrednost };
      }, funkc);
    } else {
      this.setState(prevState => {
        return { rezultat: prevState.rezultat + 0 };
      }, funkc);
    }
  };

  nextDugmeHandler = () => {
    this.provera();

    let pitanjeBr = this.state.trenPitanje;

    let ukupanBrPitanja = this.state.pitanja.length;
    pitanjeBr++;

    if (ukupanBrPitanja > pitanjeBr) {
      this.setState(prevState => {
        return { trenPitanje: prevState.trenPitanje + 1 };
      });

      if (ukupanBrPitanja === pitanjeBr + 1) {
        this.setState({ poslednjePitanje: true });
      }
    }

    this.hintstateToggler();
  };
  setDatOdgovor = vrednost => {
    this.setState({ datOdgovor: vrednost });
  };
  hintHandler = () => {
    let vrednost = this.state.pitanja[this.state.trenPitanje].vrednost;
    this.setState(prevState => {
      return {
        rezultat: prevState.rezultat - vrednost / 4,
        showHint: true,
        isDisabled: true
      };
    });
  };
  hintstateToggler = () => {
    this.setState({ showHint: false, isDisabled: false });
  };
  posalji = () => {
    // u bazu

    let score = this.state.rezultat;
    if (score < 0) {
      score = 0;
    }
    let dataEntry = {
      name: this.props.ime,
      score: score,
      quizType: this.props.tipQ,
      timed: this.props.tClock
    };
    axios
      .post(`/api/dataEntries`, dataEntry, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    // u Local
    let localRezults = JSON.parse(localStorage.getItem("rezultJSON")) || [];
    if (!(localRezults instanceof Array)) localRezults = [localRezults];

    let id = localRezults.length.toString();
    let random = Math.floor(Math.random() * 100000).toString();
    let result = {
      ...dataEntry,
      date: new Date()
        .toJSON()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/"),
      id: +id + random
    };

    localRezults.push(result);
    localStorage.setItem("rezultJSON", JSON.stringify(localRezults));
  };

  vidiRezultat = () => {
    this.provera(this.posalji);
    this.setState({ finished: true });
    if (this.props.tClock) {
      this.stopTimers();
    }
  };
  startTimers = () => {
    this.timer = setTimeout(this.vidiRezultat, 90000);
    this.interval = setInterval(() => {
      if (this.state.width <= 0) {
        clearInterval(this.interval);
      }

      this.setState(prevState => {
        return { width: prevState.width - 5 };
      });
    }, 4500);
  };
  stopTimers = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  };

  componentDidMount() {
    if (this.props.tClock) {
      this.startTimers();
    }
  }

  render() {
    let pitanjeKomponenta = (
      <Link to="/">
        Nesto nije uredu..vrati se na pocetnu stranu da zapocnes kviz
      </Link>
    );
    let hintKomponenta = null;
    let hintDugme = null;
    const trenPitanje = this.state.pitanja[this.state.trenPitanje];
    let dugmeKomponenta = null;
    let timeBar = null;

    if (this.state.pitanja.length > 0) {
      pitanjeKomponenta = (
        <Pitanje
          pitanje={trenPitanje}
          ponudjeniOdg={trenPitanje.ponudjeniOdg}
          tipPitanja={trenPitanje.tip}
          proveraTacnosti={this.setDatOdgovor}
          tipQ={this.props.tipQ}
        />
      );
      hintKomponenta = (
        <Hint show={this.state.showHint} clicked={()=>this.setState({showHint:false})}>{trenPitanje.hint}</Hint>
      );
      hintDugme = (
        <Dugme
          disable={this.state.isDisabled}
          btnType="Hint"
          clicked={this.hintHandler}
        >
          HINT
        </Dugme>
      );
      dugmeKomponenta = (
        <Dugme btnType="Next" clicked={this.nextDugmeHandler}>
          Sledeće Pitanje
        </Dugme>
      );

      if (this.state.poslednjePitanje) {
        dugmeKomponenta = (
          <Dugme btnType="Rezultat" clicked={this.vidiRezultat}>
            Vidi Rezultat
          </Dugme>
        );
      }
    }
    if (this.props.tClock) {
      let boja = "hsl(171, 100%, 41%)";
      if (this.state.width <= 20) {
        boja = "hsl(348, 100%, 61%)";
      }
      timeBar = (
        <div className={classes.Wrap}>
          <div
            className={classes.Fill}
            style={{ backgroundColor: boja, width: `${this.state.width}%` }}
          />
        </div>
      );
    }

    return (
      <div className={[classes.Quiz, classes[this.props.tipQ]].join(" ")}>
        <div className={classes.Slika}>Slika</div>
         <div className={classes.PitanjeFlex}>
        {pitanjeKomponenta}
         {dugmeKomponenta}
         </div>
         {hintDugme}
        {hintKomponenta}
        <Modal
          show={this.state.finished}
          className={[clasa.Modal, clasa.Rez].join(" ")}
        >
          <Rezultat bodovi={this.state.rezultat} nadimak={this.props.ime} />
        </Modal>
        {timeBar}
      </div>
    );
  }
}
