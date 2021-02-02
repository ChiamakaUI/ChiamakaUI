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
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={stickynote}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-justify projectParagraph">
                StickyNotes is a PWA that can be used to store text, paragraphs
                and important dates. It is basically a reminder app and can be
                used on any device including mobile phones.
              </p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a
                  href="https://github.com/ChiamakaUI/StickyNotes"
                  className="btnLink"
                >
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary">
                {" "}
                <a
                  href="https://chiamakaui.github.io/StickyNotes/"
                  className="btnLink"
                >
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={smashIt}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-justify projectParagraph">
                SmashIT is a weather app that gives you weather information in
                real time. It is also a Progressive Web App.
              </p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a
                  href="https://github.com/ChiamakaUI/weatherApp"
                  className="btnLink"
                >
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary">
                {" "}
                <a
                  href="https://chiamakaui.github.io/weatherApp/"
                  className="btnLink"
                >
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={searchapp}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-justify projectParagraph">
                I built this because I wanted to learn how to work with APIs. It
                has a simple search app that gives you the latest updates on any
                particular topic of your choice.
              </p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a
                  href="https://github.com/ChiamakaUI/Searchapp"
                  className="btnLink"
                >
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary">
                {" "}
                <a
                  href="https://chiamakaui.github.io/Searchapp/"
                  className="btnLink"
                >
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={examGrader}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-justify projectParagraph">
                This was something I built for fun. It is a simple app that can
                be used for calculating exam grades.
              </p>
              <button className=" viewBtn btn btn-outline-secondary mr-3 ">
                {" "}
                <a
                  href="https://github.com/ChiamakaUI/examGradingApp"
                  className="btnLink"
                >
                  {" "}
                  View source Code
                </a>{" "}
              </button>
              <button className=" viewBtn btn btn-outline-secondary">
                {" "}
                <a
                  href="https://chiamakaui.github.io/examGradingApp/"
                  className="btnLink"
                >
                  Live Link
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
