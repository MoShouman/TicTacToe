import Square from "./Square";
import React from "react";

const rowStyle = {
  display: "flex"
};

const boardStyle = {
  backgroundColor: "#3b4483",
  width: "50vh",
  height: "50vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid"
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "26px",
  color: "white"
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px"
};

export default class Board extends React.Component {
  render() {
    const squareColor = this.props.turn === "x" ? "black" : "blue";

    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>
          Next player: <span>{this.props.turn.toUpperCase()}</span>
        </div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>
          Winner:{" "}
          {this.props.winner && <span>{this.props.winner.toUpperCase()}</span>}
        </div>
        <button onClick={this.props.onRestHandler} style={buttonStyle}>
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={0}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={1}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={2}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={3}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={4}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={5}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={6}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={7}
            />
            <Square
              cells={this.props.cells}
              squareColor={squareColor}
              squareHandler={this.props.squareHandler}
              num={8}
            />
          </div>
        </div>
      </div>
    );
  }
}
