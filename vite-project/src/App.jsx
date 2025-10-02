import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos.map(t => <li key={t.id}>{t.text}</li>)}
      </ul>
    </>
  );
}

export default App
