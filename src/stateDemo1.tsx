import React, { useState } from "react";
import type {FC} from "react"
const Demo: FC = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count => count + 1);
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    console.log('current count',count)
  }
  return (
    <div>
      <button onClick={add}>add {count}</button>
    </div>
  );
};
export default Demo
