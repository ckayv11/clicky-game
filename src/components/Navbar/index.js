import React from "react";
import "./style.css";
import GameMessage from "../GameMessage";

function Nav(props) {
    return (
        <nav className="navbar">
            <ul>
              <li className="brand">
                <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.jpg" class="d-inline-block align-top" alt="logo" />
                  Clicky Game
                </a>
              </li>
              <li>
                <GameMessage
                  score={props.score}
                  topScore={props.topScore}
                />
              </li>
              <li>
                Score: {props.score} | Top Score: {props.topScore}
              </li>
            </ul>
        </nav>
    );
}

export default Nav;