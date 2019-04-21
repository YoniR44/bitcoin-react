import React from 'react';

import { NavLink } from 'react-router-dom'

import homeImg from '../../assets/icons/home.png'
import statsImg from '../../assets/icons/increase.png'
import contactImg from '../../assets/icons/users.png'

import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <nav>
                <ul className="main-nav">
                    <NavLink exact className="nav-link" activeClassName="activeRoute" to="/"><img className="nav-img" src={homeImg} alt="home" /></NavLink>
                    <NavLink className="nav-link" activeClassName="activeRoute" to="/contact"><img src={contactImg} alt="contact" /></NavLink>
                    <NavLink className="nav-link" activeClassName="activeRoute" to="/stats"><img src={statsImg} alt="stats" /></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header;