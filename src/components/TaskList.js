import React from "react";
import Task from './Task'
import {v4 as uuid} from 'uuid';

function TaskList({tasks, handleClick}) {

  return (
    <div className="tasks">
      {tasks.map( task => {
       return <Task task={task} key={uuid()} handleClick={handleClick}/>
      })}
    </div>
  );
}

export default TaskList;
