import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    setTitle("");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager - MERN</h1>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
export default App;