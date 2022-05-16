import { useState } from "react";
import Page from "./component/Page";
import { ThemeContext } from "./component/context/ThemeContext";
import {UserContext} from './component/context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'Context'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;