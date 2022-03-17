import React from "react";

function Task({task, handleClick}) {
  function handleOnClick(){
    handleClick(task.text)
  }
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleOnClick} >X</button>
    </div>
  );
}

export default Task;
