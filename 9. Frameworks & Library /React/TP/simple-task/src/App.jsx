import { useState } from "react";
import { Task } from "./Task";
import { AddTask } from "./AddTask";

export function App() {
  const [tasks,setTasks] = useState([
    "Faire mes devoirs",
    "Apprendre à conduire",
    "Faire à manger",
  ]);
  
  // La fonction onAddtask ajoute une task
  function addTask(newTask){
    setTasks([...tasks,newTask]);
  }
  
  const tasksElements = tasks.map((task,i)=> <Task key={i} task={task}/>);
  return (
    <div>
      <h1>Simple Task</h1>
      {/* Je passe la fonction d'ajout de tache à AddTask */}
      <AddTask onAddTask={addTask}/>
      
      <ul>
        { tasksElements }
      </ul>
    </div>
  )
}