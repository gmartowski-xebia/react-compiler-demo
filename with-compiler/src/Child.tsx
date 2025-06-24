import { useEffect, useRef } from "react";

// with-compiler/src/Child.tsx
export default function Child({ onClick }: { onClick: () => void }) {
  const renderCount = useRef(0);
  renderCount.current++;
  
  useEffect(() => {
    console.log("Child received new onClick:", onClick);
  }, [onClick]);

  console.log(`Child render count: ${renderCount.current}`);

  return <button onClick={onClick}>Click me</button>;
}
