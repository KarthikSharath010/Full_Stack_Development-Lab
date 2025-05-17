// Counter.js
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Simulate fetching initial data
  useEffect(() => {
    const fetchInitialCount = async () => {
      const initialValue = 5; // simulate API response
      setCount(initialValue);
    };

    fetchInitialCount();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(count * 2)}>✖️ Double</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}

export default Counter;
