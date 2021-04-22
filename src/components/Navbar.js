import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="main-navbar">
            <NavLink activeClassName="active_class" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active_class" to="/about">
                About
            </NavLink>
            <NavLink activeClassName="active_class" to="/contact">
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;
