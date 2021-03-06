import React, { Component } from "react";
import "./style.css";

class GameMessage extends Component {
    state = {
        message: "",
        animating: false
    };

    componentDidUpdate( { score, topScore }, prevState) {
        const newState = { animating: true };
        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        } else {
            newState.message = "correct";
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        }
    };

    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
            return "Great guess!";
        case "incorrect":
            return "Wrong guess!";
        default:
            return "Click an image!";
        }
    };

    render() {
        return (
            <li className={this.state.animating ? this.state.message: ""}
                onAnimationEnd={() => this.setState({ animating: false })}
            >
                {this.renderMessage()}
            </li>
        );
    };
};

export default GameMessage;