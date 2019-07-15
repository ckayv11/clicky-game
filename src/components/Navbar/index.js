import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <ul>
              <li className="brand">
                <a href="/">Clicky Game</a>
              </li>
              <li>Placeholder Message</li>
              <li>Placeholder Scoreboard</li>
            </ul>
        </nav>
    );
}

export default Nav;