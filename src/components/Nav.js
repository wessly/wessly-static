import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">Начало</NavLink></li>
                        <li><NavLink to="/math">Математика</NavLink></li>
                        <li><NavLink to="/tech">Информационни технологии</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
