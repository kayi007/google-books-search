import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Google Books</a>
            <div className="navbar-nav">
                <Link to="/search" className="nav-item nav-link">Search</Link>
                <Link to="/saved" className="nav-item nav-link">Saved</Link>
            </div>
        </nav>
    );
}

export default Nav;