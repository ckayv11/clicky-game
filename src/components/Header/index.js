import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <h1>Clicky Game</h1>
            <h2>Solar System Edition!</h2>
            <h3>How to Play:</h3>
            <p>This is a game to test your memory. Earn a point every time you click on a new image to beat your high score.</p>
            <p>Click on an image more than once, then your score is reset to 0 and you have to start over.</p>
            <p>Good luck!</p>
        </header>
    );
};

export default Header;