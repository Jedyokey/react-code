import React from 'react'
import { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Have some breakfast", "Take a shower", "Write some codes", "Work on projects"]);
    const [newTask, setNewTask] = useState("");
    

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if (newTask === "") {
            alert("Task cannot be empty!");
            return;
        }
        // if (newTask.trim() !== "") {
        //     setTasks(t => [...t, newTask]);
        //     setNewTask("");
        // }
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
    const deleteTask = (index) => {
        // setTasks(tasks.filter((_, i) => i !== index));
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    const moveTaskUp = (index) => {
        if (index > 0) {
            // const updatedTasks = [...tasks];
            // const temp = updatedTasks[index];
            // updatedTasks[index] = updatedTasks[index - 1];
            // updatedTasks[index - 1] = temp;
            // setTasks(updatedTasks);

            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];  
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks); 
        }
    } 


  return (
    <div style={{marginBottom: "50px"}} className='to-do-list-container'>
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className='delete-button' onClick={() => {deleteTask(index)}}>Delete</button> 

                        <button className='move-button' onClick={() => {moveTaskUp(index)}}>👆</button> 
                        <button className='move-button' onClick={() => {moveTaskDown(index)}}>👇</button> 
                    </li> 
                    
                )}
            </ol>
        </div>
      
    </div>
  )
}

export default ToDoList
