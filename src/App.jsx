
import './App.css'

import Taskform from './Components/TaskForm/task-form'
import Taskcolumn from './Components/TaskColumn/task-column'
import ClosedIcon from './assets/closed_icon.png'
import { useState } from 'react'


function App() {

  const [tasks,setTasks]=useState([]);
// console.log(tasks);

const handelDelete=(taskIndex)=>{
  const newTask=tasks.filter((task,index)=>(index!==taskIndex))
  setTasks(newTask);
}

  return (
    <div className="app">
      <Taskform setTasks={setTasks}/>
      <main className="app_main">
        <Taskcolumn title="Ready for development" tasks={tasks} status='Ready for developement' handelDelete={handelDelete}/>
        <Taskcolumn title="In-Progress" tasks={tasks} status='Inprogress' handelDelete={handelDelete}/>
        <Taskcolumn title="Ready for test" tasks={tasks} status='Ready for test' handelDelete={handelDelete}/>
        <Taskcolumn title="Closed" Icon={ClosedIcon} tasks={tasks} status='Closed' handelDelete={handelDelete}/>
      </main>
    </div>
  )
}

export default App
