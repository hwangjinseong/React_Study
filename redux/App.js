import {useSelector} from 'react-redux';
import './App.css';

function App() {
  const kg = useSelector((state) => state);

  return (
    <div className="App">
      <p>님의 몸무게: {kg}</p>
    </div>
  );
}

export default App;
