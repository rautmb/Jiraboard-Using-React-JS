
import './App.css'

import Taskform from './Components/TaskForm/task-form'
import Taskcolumn from './Components/TaskColumn/task-column'
import ClosedIcon from './assets/closed_icon.png'


function App() {


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
