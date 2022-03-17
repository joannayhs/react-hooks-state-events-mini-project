import React from "react";
import Task from './Task'
import {v4 as uuid} from 'uuid';

function TaskList({tasks, onDeleteTask}) {

  return (
    <div className="tasks">
      {tasks.map( task => <Task text={task.text} category={task.category} key={uuid()} onDeleteTask={onDeleteTask}/>)}
    </div>
  );
}

export default TaskList;
