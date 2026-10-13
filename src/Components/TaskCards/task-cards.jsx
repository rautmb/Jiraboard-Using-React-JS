
import Tag from '../Tag/tag'
import Deleteicon from '../../assets/delete_icon.png'
import './task-cards.css' ;

const Taskcards = () => {
  return (
    <article className="task_cards">
        <p>this is name</p>
        <div className="task_cards_sub">
            <div className="task_card_tags">
                <Tag tagName='DEV'/>
                <Tag tagName="QA"/>
            </div>
            <div className="task_card_img">
                <img src={Deleteicon} alt="" />
            </div>
        </div>
    </article>
  )
}

export default Taskcards;
