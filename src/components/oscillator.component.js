import React, { Component } from "react";

export default class Oscillator extends Component {
  render() {
    return (
      <div className="synthSection">
        <h3>Oscillator</h3>
        <label htmlFor="oscSelect">Select a waveform:</label>
        <form id="oscSelect" name="oscSelect">
          <input
            type="radio"
            id="sine"
            name="waveform"
            value="sine"
            onChange={this.props.handleWave}
          />
          <label htmlFor="sine">Sine</label>
          <br />
          <input
            type="radio"
            id="triangle"
            name="waveform"
            value="triangle"
            onChange={this.props.handleWave}
          />
          <label htmlFor="Triangle">Triangle</label>
          <br />
          <input
            type="radio"
            id="square"
            name="waveform"
            value="square"
            onChange={this.props.handleWave}
          />
          <label htmlFor="Square">Square</label>
          <br />
          <input
            type="radio"
            id="sawtooth"
            name="waveform"
            value="sawtooth"
            onChange={this.props.handleWave}
          />
          <label htmlFor="Sawtooth">Sawtooth</label>
        </form>
      </div>
    );
  }
}
