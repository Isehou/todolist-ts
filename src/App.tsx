import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist";

function App() {
  let initTasks = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Vue", isDone: true },
  ];

  let arr = useState(initTasks);
  let tasks = arr[0];
  let setTasks = arr[1];
  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
