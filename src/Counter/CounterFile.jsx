import React, { useState } from "react";

export const CounterFile = () => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  return (
    <div>
      <h1>This Is Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h1>Count :{count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <br />
      <button onClick={() => setCount1(count1 * 4)}>Multipal</button>
      <h1>Count : {count1}</h1>
      <button onClick={() => setCount1(count1 / 4)}>Diveded</button>
    </div>
  );
};
