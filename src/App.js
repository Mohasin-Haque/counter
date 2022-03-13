import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <h2> Counter  { counter }</h2>
        <button onClick= { clickHandler }> Click Me</button>
    </div>
  );
}

export default App;
