import React, { Component } from "react";
import stickynote from "./stickyNotes.PNG";
import smashIt from "./SmashIT.PNG";
import searchapp from "./searchApp.PNG";
import examGrader from "./examGrader.PNG";




export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="myName  mb-2">Projects</h2>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <img
                src={stickynote}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div class="col-lg-6">
              <p class="text-justify">About the app</p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a href="https://github.com/ChiamakaUI/StickyNotes">
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary my-3">
                {" "}
                <a href="https://chiamakaui.github.io/StickyNotes/">
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <p>line break</p>

        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <img
                src={smashIt}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div class="col-lg-6">
              <p class="text-justify">About the app</p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a href="https://github.com/ChiamakaUI/weatherApp">
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary my-3">
                {" "}
                <a href="https://chiamakaui.github.io/weatherApp/">
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <p>line break</p>

        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <img
                src={searchapp}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div class="col-lg-6">
              <p class="text-justify">About the app</p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a href="https://github.com/ChiamakaUI/Searchapp">
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary my-3">
                {" "}
                <a href="https://chiamakaui.github.io/Searchapp/">
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <p>line break</p>

        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <img
                src={examGrader}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div class="col-lg-6">
              <p class="text-justify">About the app</p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a href="https://github.com/ChiamakaUI/examGradingApp">
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary my-3">
                {" "}
                <a href="https://chiamakaui.github.io/examGradingApp/">
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <p>line break</p>
      </div>
    );
  }
}
