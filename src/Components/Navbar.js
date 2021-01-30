import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "./Components/logo.png";



export default class Navbar extends Component {
    render() {
        return (
            <header className='navbar  navbar-expand-lg navbar-dark px-4' style= {{ backgroundColor:  '#033159' }}>
                <div className='container-fluid'>
                    <nav> 
                        <NavLink to="/" exact>
                            Home
                             {/* <img src={logo} alt="Chiamaka Ezemba"/> */}
                        </NavLink>

                        <NavLink to="/projects">
                            Projects
                        </NavLink>

                        <NavLink to="/about">
                            About
                        </NavLink>

                        <NavLink to="/contact">
                            Contact Me
                        </NavLink>
                    </nav>
                

                </div>
            </header>
        )
    }
}
