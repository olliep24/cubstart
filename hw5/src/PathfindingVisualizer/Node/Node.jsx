import React from "react";

import "./Node.css";

// BEGIN PART 3

const Node = (props) => {
  // YOUR CODE HERE
  let col = props.col;
  let isFinish = props.isFinish;
  let isStart = props.isStart;
  let isWall = props.isWall;
  let onMouseDown = props.onMouseDown;
  let onMouseEnter = props.onMouseEnter;
  let onMouseUp = props.onMouseUp;
  let row = props.row;

  const extraClassName = isFinish
  ? "node-finish"
  : isStart
  ? "node-start"
  : isWall
  ? "node-wall"
  : "";
  
  return <div 
  id={`node-${row}-${col}`}
  className={`node ${extraClassName}`}
  onMouseDown={() => onMouseDown(row, col)}
  onMouseEnter={() => onMouseEnter(row, col)}
  onMouseUp={() => onMouseUp()}
  ></div>;
};


// END PART 3

export default Node;
