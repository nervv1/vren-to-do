import { useState } from 'react'
import './App.css'; 

function App() {
  const [text, setText] = useState('')

  return (
    <div>
      <h1> vren To-Do</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
    </div>
  )
}

export default App