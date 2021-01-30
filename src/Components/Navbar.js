import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Navbar extends Component {
    render() {
        return (
            <header className='navbar  navbar-expand-lg navbar-dark px-4' style= {{ backgroundColor:  '#033159' }}>
                <div className='container-fluid'>
                    <nav> 
                        <NavLink to="/" exact>
                            Home
                        </NavLink>

                        <NavLink to="/projects">
                            Projects
                        </NavLink>

                        <NavLink to="/about">
                            About
                        </NavLink>
                    </nav>
                    <div>
                        <SocialIcon url ="https://twitter.com/Ada_ezemba" target = "_blank"/>
                        <SocialIcon url ="https://www.linkedin.com/in/chiamaka-ezemba/" target = "_blank"/>
                        <SocialIcon url ="https://mail.google.com/mail/u/0/#inbox" target = "_blank"/>

                    </div>

                </div>
            </header>
        )
    }
}
