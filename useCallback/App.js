import React, { useCallback, useEffect, useState } from "react";
import Box from './component/Box';
function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  const createBoxStyle = useCallback(() => {
    return{
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    }
  }, [size]);
  return (
    <div style={{
      background: isDark ? 'black' : 'white',
    }}>
      <input type='number' value={size} onChange={(e) => setSize(e.target.value)}/>
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default App;