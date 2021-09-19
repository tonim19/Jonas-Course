import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
      },
      {
        name: "James",
        score: 0,
        id: 4,
      },
    ],
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];

      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;

      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers,
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            changeScore={this.handleScoreChange}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
