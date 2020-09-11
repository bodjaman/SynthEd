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
            min="0.1"
            max="6.1"
            onChange={this.props.handleAttack}
          />
          <br />
          <label htmlFor="release">Release: </label>
          <input
            type="range"
            id="release"
            name="release"
            min="0.1"
            max="6.1"
            onChange={this.props.handleRelease}
          />
        </form>
      </div>
    );
  }
}
