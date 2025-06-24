"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = () => {
    console.log("Clicked!");
  };

  const expensive = (() => {
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
      total += i;
    }
    return total;
  })();

  return (
    <div>
      <h1>With-compiler App</h1>
      <h2>Count: {count}</h2>
      <p>Expensive: {expensive}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
