import React from 'react'
import './task-column.css' ;
import Taskcards from '../TaskCards/task-cards'

const Taskcolumn = (props) => {
  return (
    <div>
       <section className="task_column">
        <h2 className="task_column_heading">
            <img className="task_closed_imgicon" src={props.Icon} alt="" />
            {props.title}</h2>
            <Taskcards/>
       </section>
    </div>
  )
}

export default Taskcolumn;