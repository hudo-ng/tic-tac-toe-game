import { useState } from "react";
import "./App.scss";
import Button from "./components/button";

const initialList = new Array(9).fill("");
function App() {
  const [value, setValue] = useState("X");
  const [listOfValue, setListOfValue] = useState(initialList);

  function handleUserClick(index) {
    const nextValue = value === "x" ? "o" : "x";
    setValue(nextValue);
    if (listOfValue[index] === "") {
      listOfValue[index] = nextValue;
    }
    setListOfValue(listOfValue);
  }
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {initialList.map((item, index) => (
          <Button
            value={item}
            key={index}
            onUserClick={() => handleUserClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
