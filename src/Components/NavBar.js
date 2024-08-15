import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    console.log("navbar is getting called");
    return(
        <div className="navbar">
            <Link to="/">Main</Link>
            <Link to="/registration">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/contact">ContactPage</Link>
        </div>
    )
}

export default memo(NavBar)