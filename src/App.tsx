import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "HTML", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Vue", isDone: false },
    { id: v1(), title: "Redux", isDone: true },
    { id: v1(), title: "GraphQl", isDone: false },
  ]);
  console.log(tasks);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(filteredTasks);
  }
  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }
  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
