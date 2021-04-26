import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <div className="menu">
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
            <hr />
        </div>
        
    );
};

export default Navbar;
