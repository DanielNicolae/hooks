import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    document.addEventListener("click", changeColorOnClick);
    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div className="App">
      <div id="count"
        style={{ color: color }}
      >
        {count}
      </div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
