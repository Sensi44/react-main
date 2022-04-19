import React from "react";


const Grid = (props) => {
  console.log(props.children)
  return (
  <div>{props.children}</div>
  );
};

export default Grid;
