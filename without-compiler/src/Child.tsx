// without-compiler/src/Child.tsx
import { memo } from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default Child;
