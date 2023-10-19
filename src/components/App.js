import React, { Component } from "react";
import "../App.css";
import Player from "./Player";
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Luis",
        id: 1,
        score: 0,
      },
      {
        name: "Jeanette",
        id: 2,
        score: 0,
      },
      {
        name: "Constanza",
        id: 3,
        score: 0,
      },
    ],
  };

  prevPlayerId = 3;

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players /* esto hace marge */,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="App">
        <Header title="Scoreboard app" players={this.state.players} />
        <div className="players-list">
          {this.state.players.map((player, index) => (
            <Player
              id={player.id}
              index={index}
              score={player.score}
              changeScore={this.handleScoreChange}
              name={player.name}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
              isHighScore={highScore === player.score}
            />
          ))}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
