import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
    <div>
        <div className="navbar">
         <img id="home-logo" src="https://i.ibb.co/ZKNdzPR/start-button-without-play.png" alt="start button" />
         <div className="nav-links">
           <NavLink activeClassName="active_class" to="/">Home</NavLink>
           <NavLink activeClassName="active_class" to="/about">About</NavLink>
           <NavLink activeClassName="active_class" to="/contact">Contact</NavLink>
         </div>
        </div>
        <hr id="nav-line" />
    </div>
        
         
    );
};

export default Navbar;
