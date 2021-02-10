import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  return (
    <div>
      <h3>Tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">generate</button>
      </form>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          similique in. Sed, esse rerum voluptate perferendis sint omnis,
          repellat consequatur temporibus accusantium in facilis minima placeat
          minus corporis aliquid iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          similique in. Sed, esse rerum voluptate perferendis sint omnis,
          repellat consequatur temporibus accusantium in facilis minima placeat
          minus corporis aliquid iste.
        </p>
      </div>
    </div>
  );
}

export default App;
