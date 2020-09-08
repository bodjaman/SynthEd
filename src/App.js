import React, { Component } from "react";
import Oscillator from "./components/oscillator.component";
import Envelope from "./components/envelope.component";
import Filter from "./components/filter.component";
import "./App.css";

class App extends Component {
  state = {
    waveform: "",
    attack: "",
    sustain: "",
    decay: "",
    release: "",
    filterType: "",
    cutoff: "",
    resonance: "",
    level: "",
    playing: false,
  };

  logChangeHandler = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  waveformHandler = (event) => {
    this.setState({
      waveform: event.target.value,
    });
  };

  attackHandler = (event) => {
    this.setState({
      attack: event.target.value,
    });
  };

  sustainHandler = (event) => {
    this.setState({
      sustain: event.target.value,
    });
  };

  decayHandler = (event) => {
    this.setState({
      decay: event.target.value,
    });
  };

  releaseHandler = (event) => {
    this.setState({
      release: event.target.value,
    });
  };

  filterTypeHandler = (event) => {
    this.setState({
      filterType: event.target.value,
    });
  };

  cutoffHandler = (event) => {
    this.setState({
      cutoff: event.target.value,
    });
  };

  resonanceHandler = (event) => {
    this.setState({
      resonance: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Synth App</h1>
        <div className="synth">
          <Oscillator handleWave={this.waveformHandler} />
          <Envelope
            handleAttack={this.attackHandler}
            handleSustain={this.sustainHandler}
            handleDecay={this.decayHandler}
            handleRelease={this.releaseHandler}
          />
          <Filter
            handleChange={this.logChangeHandler}
            handleFilterType={this.filterTypeHandler}
            handleCutoff={this.cutoffHandler}
            handleResonance={this.resonanceHandler}
          />
          <div className="synthSection">
            <label htmlFor="level">Level</label>
            <input type="range" id="level" name="level" />
            <br />
            <button>On/Off</button>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
