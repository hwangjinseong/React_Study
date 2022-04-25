import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const countUpdate = () => {
    setCount(count + 1);
  };
  const inputTag = (e) => {
    setName(e.target.value);
  };
  // // 렌더링 될떄마다 useEffect실행
  // useEffect(() => {
  //   console.log("렌더링1");
  // });

  // // 마운팅 + count가 변화할때
  // useEffect(() => {
  //   console.log("렌더링2");
  // }, [count]);

  // // 마운팅 + name이 변화할떄
  // useEffect(() => {
  //   console.log("렌더링3");
  // }, [name]);

  useEffect (() => {
    console.log('렌더링');
  }, []);
  return (
    <div>
      <span>count: {count}</span>
      <button onClick={countUpdate}>Update</button>
      <div>
        <input type="text" value={name} onChange={inputTag} /><br/>
        <span>name: {name}</span>
      </div>
    </div>
  );
}

export default App;
