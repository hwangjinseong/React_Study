import React, { useState, useRef } from "react";

function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  }

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('Var: ', countVar);
  }
  const dorendering = () => {
    setRenderer(renderer + 1);
  }

  const printResult = () => {
    console.log(`ref: ${countRef.current} var: ${countVar}`);
  }
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={dorendering}>렌더</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResult}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;