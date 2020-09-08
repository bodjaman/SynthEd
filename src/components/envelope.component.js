import React, { Component } from "react";

export default class Envelope extends Component {
  render() {
    return (
      <div className="synthSection">
        <h3>Envelope</h3>
        <label htmlFor="envSet">Set an envelope:</label>
        <form id="envSet" name="envSet">
          <label htmlFor="attack">Attack: </label>
          <input
            type="range"
            id="attack"
            name="attack"
            onChange={this.props.handleAttack}
          />
          <br />
          <label htmlFor="sustain">Sustain: </label>
          <input
            type="range"
            id="sustain"
            name="sustain"
            onChange={this.props.handleSustain}
          />
          <br />
          <label htmlFor="decay">Decay: </label>
          <input
            type="range"
            id="decay"
            name="decay"
            onChange={this.props.handleDecay}
          />
          <br />
          <label htmlFor="release">Release: </label>
          <input
            type="range"
            id="release"
            name="release"
            onChange={this.props.handleRelease}
          />
        </form>
      </div>
    );
  }
}
