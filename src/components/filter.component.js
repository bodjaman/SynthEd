import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="synthSection">
        <h3>Filter</h3>
        <label htmlFor="filterSet">Set your filter:</label>
        <form id="filterSet">
          <input
            type="radio"
            id="highPass"
            name="filterType"
            value="high-pass"
            onChange={this.props.handleFilterType}
          />
          <label htmlFor="highPass">High-pass</label>
          <br />
          <input
            type="radio"
            id="lowPass"
            name="filterType"
            value="low-pass"
            onChange={this.props.handleFilterType}
          />
          <label htmlFor="lowPass">Low-pass</label>
          <br />
          <label htmlFor="cutoff">Cutoff: </label>
          <input
            type="range"
            id="cutoff"
            name="cutoff"
            onChange={this.props.handleCutoff}
          />
          <br />
          <label htmlFor="resonance">Resonance: </label>
          <input
            type="range"
            id="resonance"
            name="resonance"
            onChange={this.props.handleResonance}
          />
        </form>
      </div>
    );
  }
}
