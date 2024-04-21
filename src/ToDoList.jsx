import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {

    if(newTask.trim() !==""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
    
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUpTask(index) {
    if(index > 0){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] =
    [updatedTasks[index - 1],updatedTasks[index]];
    setTasks(updatedTasks);
    }
  }

  function moveDownTask(index) {
      if(index < tasks.length -1){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] =
    [updatedTasks[index + 1],updatedTasks[index]];
    setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="dlt-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-btn" onClick={() => moveUpTask(index)}>
                ↑
              </button>
              <button className="move-btn" onClick={() => moveDownTask(index)}>
                ↓
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;
