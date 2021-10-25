import React, { useState } from "react";
import CoutNum from "./CountNum";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [diff, setDiff] = useState(1);

  const increase = () => {
    setNum(num + diff);
  };

  const decrease = () => {
    setNum(num - diff);
  };

  const reset = () => {
    setNum(0);
    setDiff(1);
  };

  const handleDiff = (e) => {
    let inputValue = Number(e.target.value);
    setDiff(inputValue);
  };
  return (
    <div>
      {/* <h2>{num}</h2> */}
      <CoutNum num={num} />
      <br />
      <button onClick={increase}>up</button>
      <button onClick={decrease}>down</button>
      <button onClick={reset}>reset</button>
      <br />
      <input type="number" onChange={handleDiff} value={diff} />
    </div>
  );
};

export default Counter;