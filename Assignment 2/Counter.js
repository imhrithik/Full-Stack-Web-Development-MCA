import React, { useState } from 'react';
import 'Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h2 className="counter">Count: {count}</h2>
      <div className="button-group">
        <button className="decrement-button" onClick={decrement}>Decrement</button>
        <button className="increment-button" onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
