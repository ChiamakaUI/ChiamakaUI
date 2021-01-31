import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png"
import './Style.css'



export default class Navbar extends Component {
    render() {

       
        return (
          <header
            className="navbar navbar-expand-lg navbar-dark header"
            style={{ backgroundColor: "#16576A" }}
          >
            <div className="container-fluid">
              <nav>
                <NavLink to="/" exact>
                  <img src={logo} alt="Chiamaka Ezemba" className="logoStyle" />
                </NavLink>
                <div className="d-flex flex-row-reverse d-inline-flex secondDiv">
                  <NavLink to="/about" className="links p-2">
                    About
                  </NavLink>
                  <NavLink to="/projects" className="links p-2">
                    Projects
                  </NavLink>

                  <NavLink to="/contact" className="links p-2">
                    Contact Me
                  </NavLink>
                </div>
              </nav>
            </div>
          </header>
        );
    }
}
