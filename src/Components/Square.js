const squareStyle = {
  width: "16vh",
  height: "16vh",
  backgroundColor: "#62ACB5",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
  color: "white"
};

export default function Square({ num, cells, squareHandler }) {
  return (
    <div
      onClick={() => squareHandler(num)}
      className="square"
      style={squareStyle}
    >
      {cells[num]}
    </div>
  );
}
