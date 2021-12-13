const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
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
