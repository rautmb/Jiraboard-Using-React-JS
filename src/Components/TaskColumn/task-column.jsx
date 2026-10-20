
import './task-column.css';
import Taskcards from '../TaskCards/task-cards'
import DragArea from '../DragComp/DragArea';
import React from 'react';

const Taskcolumn = ({ title, Icon, tasks, status,handelDelete,setActiveCard,onDrop}) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_closed_imgicon" src={Icon} alt="" />
          {title}</h2>
          <DragArea onDrop={() => onDrop(status, 0)}/>
         
            {tasks.map((task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <Taskcards
                title={task.task}
                tags={task.tags}
                handelDelete={handelDelete}
                index={index}
                setActiveCard={setActiveCard}
              />

              <DragArea
                onDrop={() => onDrop(status, index + 1)}
              />
            </React.Fragment>
          )
        )}
      </section>
    </div>
  )
}

export default Taskcolumn;