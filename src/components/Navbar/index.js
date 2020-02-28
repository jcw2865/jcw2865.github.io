import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="nav nav-pills flex-column flex-sm-row">
            <Link className="flex-sm-fill text-sm-center nav-link">Jake Walker</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/">About Me</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/portfolio">Portfolio</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to="/contact">Contact</Link>
        </nav>

    )
}

export default Navbar;