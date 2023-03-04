import React from "react";

function Keyboard() {
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
    "CHECK",
  ];
  return (
    <div className="keyboard">
      {keysArray.map((lett, index) => (
        <button id={`${index}${lett}`} className={`keys ${lett}`}>
          {lett}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
