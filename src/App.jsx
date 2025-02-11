import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";

const initialList = new Array(9).fill("");
function App() {
  const [value, setValue] = useState("x");
  const [listOfValue, setListOfValue] = useState(initialList);
  const [numMoveLeft, setNumMoveLeft] = useState(9);
  const [hasWinner, setHasWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  function handleUserClick(index) {
    let nextValue = value === "x" ? "o" : "x";
    if (listOfValue[index] === "" && !hasWinner) {
      const newDataList = [...listOfValue];
      newDataList[index] = nextValue;
      setListOfValue(newDataList);
      setNumMoveLeft(numMoveLeft - 1);
      setValue(nextValue);
      const [winner, theWinningLine] = checkWinner(newDataList);
      console.log(winner);
      if (winner) {
        setHasWinner(winner);
        setWinningLine(theWinningLine);
      }
    }
  }
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {listOfValue.map((item, index) => (
          <Button
            value={item}
            key={index}
            onUserClick={() => handleUserClick(index)}
            isHighlighted={winningLine.includes(index)}
          />
        ))}
      </div>
      <div>
        {hasWinner ? (
          <p className="board__winner-message">Winner is: {hasWinner}</p>
        ) : numMoveLeft === 0 ? (
          <p className="board__winner-message">It is a draw</p>
        ) : undefined}
      </div>
      <div>
        {!hasWinner && numMoveLeft !== 0 ? (
          <p className="board__winner-message">{value} next</p>
        ) : undefined}
      </div>
    </div>
  );
}

export default App;

function checkWinner(data) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of winLines) {
    const [a, b, c] = line;
    if (data[a] && data[a] === data[b] && data[a] === data[c]) {
      return [data[a], line];
    }
  }
  return null;
}
