import { useState, useCallback, useMemo } from "react";
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
    return total;
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Expensive: {expensive}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
