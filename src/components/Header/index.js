import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <h1>Solar System Edition</h1>
            <img src="/assets/images/planets.jpg" width="150" height="150" class="d-inline-block align-top" alt="logo" />
            <h3>How to Play:</h3>
            <p>This is a game to test your memory. Earn a point every time you click on a new image to beat your high score.</p>
            <p>If you click on an image more than once, then your score is reset to 0 and you have to start over.</p>
            <p>Good luck!</p>
        </header>
    );
};

export default Header;