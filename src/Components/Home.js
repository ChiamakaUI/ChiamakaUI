import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Style.css";


export default class Home extends Component {
    render() {
        return (
          <div className="container text-center mt-auto wrapper p-4">
            <h1 className="myName">Chiamaka Ezemba</h1>
            <h4 className="bio my-3">
              I am frontend developer focused on creating clean & user-friendly
              experience
            </h4>
            <button className=" viewBtn btn btn-outline-secondary my-3">
            <NavLink to="/projects" className="btnLink" >
                View my work
              </NavLink>
            </button>
          </div>
        );
    }
}
