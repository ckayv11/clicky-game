import React, { Component } from "react";
import Navbar from "../Navbar";
import Container from "../Container";
import Header from "../Header";
import ImageforClick from "../ImageForClick";
import Footer from "../Footer";
import data from "../../data.json";
import { reset } from "ansi-colors";
import ImageForClick from "../ImageForClick";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.randomData(this.state.data) });
    };

    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            data: this.randomData(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.randomData(resetData);
    };

    randomData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleImageClick = id => {
        let correctGuess = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
              if (!newItem.clicked) {
                  newItem.clicked = true;
                  correctGuess = true;
              }
            }
            return newItem;
        });
        correctGuess
        ? this.handleCorrectGuess(newData)
        : this.handleIncorrectGuess(newData);
    };

    render() {
        return (
            <div>
                <Navbar
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header />
                <Container>
                    {this.state.data.map(item => (
                        <ImageForClick
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleImageClick}
                            image={item.image}
                        />
                    ))}
                </Container>
                <Footer />
            </div>
        );
    };
};

export default Game;
