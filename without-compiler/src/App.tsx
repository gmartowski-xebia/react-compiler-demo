import { useState, useCallback, useMemo, use } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  const expensive = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
      total += i;
    }
    console.log("Expensive calculation done");
    return total;
  }, []);

  return (
    <div>
      <h1>Without-compiler App</h1>
      <h2>Count: {count}</h2>
      <p>Expensive: {expensive}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
