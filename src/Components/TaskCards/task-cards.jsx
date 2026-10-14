
import Tag from '../Tag/tag'
import Deleteicon from '../../assets/delete_icon.png'
import './task-cards.css' ;

const Taskcards = ({title,tags}) => {
  return (
    <article className="task_cards">
        <p>{title}</p>
        <div className="task_cards_sub">
            <div className="task_card_tags">
                {tags.map((tag,index)=>(<Tag key={index} tagName={tag} selected/>))}
            </div>
            <div className="task_card_img">
                <img src={Deleteicon} alt="" />
            </div>
        </div>
    </article>
  )
}

export default Taskcards;
