import React, { Component } from "react";
import stickynote from "./stickyNotes.PNG";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="myName m-5">Projects</h2>
        <div className="row container">
          <div className="col">
            <img src={stickynote} alt="Sticky Note App" className="logoStyle" />
          </div>
          <div className="col">2 of 3</div>
          <div className="col">3 of 3</div>
        </div>
      </div>
    );
  }
}
