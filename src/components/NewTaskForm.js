import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [cat, setCat] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({
      text: text,
      category: cat
    })
    setText('')
    setCat("Code")
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCat(e.target.value)}>
          {categories.map( category => category === "All" ? null : <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
