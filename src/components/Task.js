import React from "react";

function Task({text, category, onDeleteTask}) {
  function handleOnClick(){
    onDeleteTask(text)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleOnClick} >X</button>
    </div>
  );
}

export default Task;
