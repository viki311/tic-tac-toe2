import React, { useState } from "react";
import Icons from "./Components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let tikArray = new Array(9).fill("");
const App = () => {
  let [isCross, setIscross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  //playAgain
  const playAgain = () => {
    tikArray.fill("");
    setIscross(true);
    setWinMessage("");
  };
  //findWinner
  const findWinner = () => {
    if (
      tikArray[0] == tikArray[1] &&
      tikArray[0] == tikArray[2] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0] + " has won!!!");
    } else if (
      tikArray[3] == tikArray[4] &&
      tikArray[3] == tikArray[5] &&
      tikArray[3] != ""
    ) {
      setWinMessage(tikArray[3] + " has won!!!");
    } else if (
      tikArray[6] == tikArray[7] &&
      tikArray[7] == tikArray[8] &&
      tikArray[6] != ""
    ) {
      setWinMessage(tikArray[6] + " has Won!!!");
    } else if (
      tikArray[0] == tikArray[3] &&
      tikArray[0] == tikArray[6] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0] + " has Won!!!");
    } else if (
      tikArray[1] == tikArray[4] &&
      tikArray[1] == tikArray[7] &&
      tikArray[1] != ""
    ) {
      setWinMessage(tikArray[1] + " has Won!!!");
    } else if (
      tikArray[2] == tikArray[5] &&
      tikArray[2] == tikArray[8] &&
      tikArray[2] != ""
    ) {
      setWinMessage(tikArray[2] + " has Won!!!");
    } else if (
      tikArray[0] == tikArray[4] &&
      tikArray[0] == tikArray[8] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0] + " has Won!!!");
    } else if (
      tikArray[2] == tikArray[4] &&
      tikArray[2] == tikArray[6] &&
      tikArray[2] != ""
    ) {
      setWinMessage(tikArray[2] + " has Won!!!");
    } else if (tikArray.indexOf("") == -1) {
      setWinMessage("Draw!!!");
    }
  };
  const getKey = () => {
    return Date.now().toString();
  };
  const changeItem = (index) => {
    if (winMessage) {
      return toast("Game Ended");
    }
    if (tikArray[index] != "") {
      return toast("It's not empty try with other blocks");
    } else {
      tikArray[index] = isCross ? "cross" : "circle";
      setIscross(!isCross);
      findWinner();
    }
  };
  return (
    <div>
      <ToastContainer position="bottom-center" />
      {winMessage != "" ? (
        <div>
          <h1>{winMessage.toUpperCase()}</h1>
          <button onClick={playAgain}>play Again</button>
        </div>
      ) : (
        <h1>Chance is of:{isCross ? "cross" : "circle"}</h1>
      )}
      <div className="grid">
        {tikArray.map((value, index) => (
          <div key={index} className="box" onClick={() => changeItem(index)}>
            <Icons ic={value} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
