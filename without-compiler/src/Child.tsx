// without-compiler/src/Child.tsx
import { memo, useEffect, useRef } from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {

    const renderCount = useRef(0);
    renderCount.current++;

   useEffect(() => {
    console.log("Child received new onClick:", onClick);
  }, [onClick]);

  console.log(`Child render count: ${renderCount.current}`);

  return <button onClick={onClick}>Click me</button>;
});

export default Child;
