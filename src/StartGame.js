import React, { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

// API call: https://random-word-api.herokuapp.com/word

export default function StartGame() {
  const { myWord, setMyWord } = useContext(Context);

  async function fetchWord() {
    axios
      .get("https://random-word-api.herokuapp.com/word")
      .then((response) => {
        setMyWord(response.data[0]);
      })
      .catch((error) => console.log("Could not fetch word. Error:" + error));
  }

  return <button onClick={fetchWord}>START</button>;
}
