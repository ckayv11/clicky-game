import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <ul>
              <li className="brand">
                <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.jpg" class="d-inline-block align-top" alt="logo" />
                  Clicky Game
                </a>
              </li>
              <li>Placeholder Message</li>
              <li>Placeholder Scoreboard</li>
            </ul>
        </nav>
    );
}

export default Nav;