import React from "react";
import Counter from "./Counter"; // or use CounterClass

function App() {
  return (
    <div>
      <h1><center>React Counter Demo</center></h1>
      <Counter /> {/* or use <CounterClass /> */}
    </div>
  );
}

export default App;