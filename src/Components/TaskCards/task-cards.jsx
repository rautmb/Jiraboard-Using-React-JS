
import Tag from '../Tag/tag'
import Deleteicon from '../../assets/delete_icon.png'
import './task-cards.css' ;

const Taskcards = ({title,tags,handelDelete,index,setActiveCard }) => {
  return (
    <article className="task_cards" draggable onDragStart={()=>{setActiveCard(index)}} onDragEnd={()=>{setActiveCard(null)}}>
        <p>{title}</p>
        <div className="task_cards_sub">
            <div className="task_card_tags">
                {tags.map((tag,index)=>(<Tag key={index} tagName={tag} selected/>))}
            </div>
            <div className="task_card_img" onClick={()=>{handelDelete(index)}}>
                <img src={Deleteicon} alt="" />
            </div>
        </div>
    </article>
  )
}

export default Taskcards;
