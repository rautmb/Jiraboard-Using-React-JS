
import './task-column.css';
import Taskcards from '../TaskCards/task-cards'

const Taskcolumn = ({ title, Icon, tasks, status,handelDelete }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_closed_imgicon" src={Icon} alt="" />
          {title}</h2>
        {tasks.map((task, index) => task.status === status && <Taskcards key={index} title={task.task} tags={task.tags} handelDelete={handelDelete} index={index}/>)}
      </section>
    </div>
  )
}

export default Taskcolumn;