import React from "react";

const Counter = (props) => {
  return (
    <div className="score">
      <button
        className="score-button decrement"
        onClick={() => props.changeScore(props.index, -1)}
      >
        -
      </button>
      <div className="score-result">{props.score}</div>
      <button
        className="score-button increment"
        onClick={() => props.changeScore(props.index, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
