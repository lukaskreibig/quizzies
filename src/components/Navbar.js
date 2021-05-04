import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="menu">
                <NavLink className="link-btn-nav" to="/">
                    <img
                        className="logo-nav"
                        src="https://i.ibb.co/cLQ05RM/start-button.png"
                        alt="logo-home"
                    />
                </NavLink>

                <div>
                    <NavLink
                        activeClassName="active_class"
                        id="home-link"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink activeClassName="active_class" to="/about">
                        About
                    </NavLink>
                    <NavLink activeClassName="active_class" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
            <hr id="nav-line" />
        </div>
    );
};

export default Navbar;
