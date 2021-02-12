import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data)
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
        {
          text.map((item, index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
