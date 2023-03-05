import React, { useContext, useEffect } from "react";
import { Context } from "./Context";

export default function RenderGuessWord() {
  const { myWord, handleKey, myArray, setMyArray, giveMeHint } =
    useContext(Context);
  const attemptsLeft = 5;

  useEffect(() => {
    setMyArray(myWord.split(""));
  }, [myWord]);

  return (
    <div>
      <span className="centered">
        {myArray.map((vwl, index) => (
          <span className="st-letter" id={`letter-${index}`}>
            *
          </span>
        ))}
      </span>
      <span className="centered">
        <button onClick={() => handleKey("ENTER")}>CHECK</button>
        <button onClick={() => giveMeHint()}>I NEED A HINT</button>
        <br />
        <h3 className="atp-box">{attemptsLeft} attempts left</h3>
      </span>
    </div>
  );
}
