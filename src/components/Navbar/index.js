import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav nav-pills flex-column flex-sm-row">
            <h4 className="flex-sm-fill text-sm-center nav-link">Jake Walker</h4>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/">About Me</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/portfolio">Portfolio</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/contact">Contact</Link>
        </nav>

    )
}

export default Navbar;