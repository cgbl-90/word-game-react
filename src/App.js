import React, { useState } from "react";
import carmen from "./carmen.svg";
import StartGame from "./StartGame";
import RenderGuessWord from "./RenderGuessWord";
import Keyboard from "./Keyboard";
import { Context } from "./Context";
import "./sass/App.css";

export default function App() {
  const [myWord, setMyWord] = useState(" ");
  const [myArray, setMyArray] = useState([]);
  const [compareArray, setCompareArray] = useState([]);

  const handleKey = (key) => {
    if (key === "ENTER") {
      console.log("confirm if the word is correct! ");
    } else if (key === "DEL") {
      console.log("delete letter from word! ");
    } else console.log("key: " + key);
  };

  function giveMeHint() {
    console.log("share a hint with the player");
  }

  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <Context.Provider
          value={{
            myWord,
            setMyWord,
            handleKey,
            myArray,
            setMyArray,
            giveMeHint,
          }}
        >
          <StartGame />
          <RenderGuessWord />
          <Keyboard />
        </Context.Provider>
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}
