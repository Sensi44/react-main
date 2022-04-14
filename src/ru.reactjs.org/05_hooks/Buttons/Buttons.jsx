import React, {Component, useState, useEffect, useRef, Fragment} from "react";


const Buttons = React.memo(({ onPlus, onMinus }) => {
  console.log('Buttons render');

  return (
    <Fragment>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </Fragment>
  );
})

export default Buttons








