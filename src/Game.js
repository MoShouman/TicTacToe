import React from "react";
import Board from "./Components/Board";

export default class Game extends React.Component {
  state = {
    turn: "x",
    cells: Array(9).fill(""),
    winner: ""
  };

  onRestHandler = (e) => {
    e.preventDefault();

    const init = {
      turn: "x",
      cells: Array(9).fill(""),
      winner: ""
    };

    this.setState(init);
  };

  checkWinner(squares) {
    const possibleWaysToWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < possibleWaysToWin.length; i++) {
      let [a, b, c] = possibleWaysToWin[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        this.setState({ winner: squares[a] });
    }
  }

  squareHandler = (num) => {
    let squares = [...this.state.cells];

    if (squares[num] !== "" || this.state.winner !== "") return;

    if (this.state.turn === "x") {
      squares[num] = "x";
      this.setState({ turn: "o" });
    } else {
      squares[num] = "o";
      this.setState({ turn: "x" });
    }
    this.checkWinner(squares);
    this.setState({ cells: squares });
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            turn={this.state.turn}
            cells={this.state.cells}
            winner={this.state.winner}
            squareHandler={this.squareHandler}
            onRestHandler={this.onRestHandler}
          />
        </div>
      </div>
    );
  }
}
