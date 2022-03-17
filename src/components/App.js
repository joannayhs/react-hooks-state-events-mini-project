import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)
  
  function deleteTask(deletedTaskText){
    setTasks(tasks.filter(task => task.text !== deletedTaskText))
  }

  function addTask(task){
    setTasks([...tasks, task])
  }

  const visibleTasks = tasks.filter( task => {
    return category === "All" || task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={visibleTasks} handleClick={deleteTask}/>
    </div>
  );
}

export default App;
