import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Taskform from './Components/TaskForm/task-form'
import Taskcolumn from './Components/TaskColumn/task-column'
import ClosedIcon from './assets/closed_icon.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Taskform/>
      <main className="app_main">
        <Taskcolumn title="Ready for development"/>
        <Taskcolumn title="In-Progress"/>
        <Taskcolumn title="Ready for test"/>
        <Taskcolumn title="Closed" Icon={ClosedIcon}/>
      </main>
    </div>
  )
}

export default App
