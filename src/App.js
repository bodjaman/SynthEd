import React, { Component } from "react";
import { Synth, Filter } from "tone";
import Oscillator from "./components/oscillator.component";
import Envelope from "./components/envelope.component";
import FilterComponent from "./components/filter.component";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: "",
      attack: "",
      release: "",
      filterType: "highpass",
      cutoff: "100",
      resonance: "",
      level: "",
    };
    this.filter = new Filter();
    this.synth = new Synth().toMaster();
  }

  paramChangeHandler = (event) => {
    switch (event.target.name) {
      case "waveform":
        this.setState(
          {
            waveform: event.target.value,
          },
          () => {
            this.synth.oscillator.type = this.state.waveform;
          }
        );
        break;
      case "attack":
        this.setState(
          {
            attack: event.target.value / 2,
          },
          () => {
            this.synth.envelope.attack = this.state.attack;
          }
        );
        break;
      case "release":
        this.setState(
          {
            release: event.target.value,
          },
          () => {
            this.synth.envelope.release = this.state.release;
          }
        );
        break;
      case "filterType":
        this.setState({
          filterType: event.target.value,
        });
        break;
      case "cutoff":
        this.setState({
          cutoff: event.target.value,
        });
        break;
      case "resonance":
        this.setState({
          resonance: event.target.value,
        });
        break;
      case "level":
        this.setState(
          {
            level: event.target.value - 30,
          },
          () => {
            this.synth.volume.value = this.state.level;
          }
        );
        break;
      default:
        return;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 68:
          return this.synth.triggerAttack("C4");
        case 82:
          return this.synth.triggerAttack("C#4");
        case 70:
          return this.synth.triggerAttack("D4");
        case 84:
          return this.synth.triggerAttack("D#4");
        case 71:
          return this.synth.triggerAttack("E4");
        case 72:
          return this.synth.triggerAttack("F4");
        case 85:
          return this.synth.triggerAttack("F#4");
        case 74:
          return this.synth.triggerAttack("G4");
        case 73:
          return this.synth.triggerAttack("G#4");
        case 75:
          return this.synth.triggerAttack("A4");
        case 79:
          return this.synth.triggerAttack("A#4");
        case 76:
          return this.synth.triggerAttack("B4");
        default:
          return;
      }
    });

    document.addEventListener("keyup", (event) => {
      this.synth.triggerRelease();
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Synth App</h1>
        <div className="synth">
          <Oscillator handleWave={this.paramChangeHandler} />
          <Envelope
            handleAttack={this.paramChangeHandler}
            handleRelease={this.paramChangeHandler}
          />
          <FilterComponent
            handleFilterType={this.paramChangeHandler}
            handleCutoff={this.paramChangeHandler}
            handleResonance={this.paramChangeHandler}
          />
          <div className="synthSection">
            <label htmlFor="level">Level</label>
            <input
              type="range"
              id="level"
              name="level"
              max="30"
              onChange={this.paramChangeHandler}
            />
          </div>
        </div>
        <p>Press keys D–L to play</p>
      </div>
    );
  }
}
