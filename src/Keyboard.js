import React, { useContext } from "react";
import { Context } from "./Context";

function Keyboard() {
  const { handleKey } = useContext(Context);
  const keysArray = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "DEL",
  ];

  return (
    <div className="keyboard">
      {keysArray.map((lett, index) => (
        <button
          id={`${index}${lett}`}
          className={`keys ${lett}`}
          onClick={() => handleKey(lett)}
        >
          {lett}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
