import React, { useState } from "react";
import './App.css';
import "./styles/Style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // to add new tasks
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // to remove the tasks
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div class="todo-app">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button className="remove-btn" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
