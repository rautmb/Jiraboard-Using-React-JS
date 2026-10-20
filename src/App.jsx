
import './App.css'

import Taskform from './Components/TaskForm/task-form'
import Taskcolumn from './Components/TaskColumn/task-column'
import ClosedIcon from './assets/closed_icon.png'
import { useEffect, useState } from 'react'

const existingTasks=localStorage.getItem('tasks');
console.log(existingTasks);

function App() {

  const [tasks,setTasks]=useState(JSON.parse(existingTasks) || []);
// console.log(tasks);



useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks])


const [activeCard,setActiveCard]=useState(null);

const onDrop = (status, position) => {
  console.log(
    `Task ${activeCard} is moving to ${status} at position ${position}`
  );

  if (activeCard === null || activeCard === undefined) return;

  const tasksmove = tasks[activeCard];

  if (!tasksmove) return;

  const updatedTasks = tasks.filter(
    (task, index) => index !== activeCard
  );

  updatedTasks.splice(position, 0, {
    ...tasksmove,
    status: status
  });

  setTasks(updatedTasks);
  setActiveCard(null);
};

const handelDelete=(taskIndex)=>{
  const newTask=tasks.filter((task,index)=>(index!==taskIndex))
  setTasks(newTask);
}

  return (
    <div className="app">
      <Taskform setTasks={setTasks}/>
      <main className="app_main">
        <Taskcolumn title="Ready for development" tasks={tasks} status='Ready for developement' handelDelete={handelDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <Taskcolumn title="In-Progress" tasks={tasks} status='Inprogress' handelDelete={handelDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
        <Taskcolumn title="Ready for test" tasks={tasks} status='Ready for test' handelDelete={handelDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
        <Taskcolumn title="Closed" Icon={ClosedIcon} tasks={tasks} status='Closed' handelDelete={handelDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
      </main>
      <h2>Active {activeCard}</h2>
    </div>
  )
}

export default App
