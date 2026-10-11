import React from 'react'
import './task-form.css' ;
import Tag from '../Tag/tag'

const Taskform=()=>{
    return(
        <div>
            <header className="app_header">
            <h1 className="app_heading">JiraBoard</h1>
                <form action="">
                    <input type="text" className="task_input" placeholder="please enter task"/>
                    <div className="button_main">
                    <div className="button_style">
                       <Tag tagName='DEV'/>
                       <Tag tagName='QA'/>
                       <Tag tagName='Product Owner'/>
                    </div>
                    <div className="dropdown_style">
                     <select className="task_status">
                            <option value="Ready for developement">Ready for developement</option>
                            <option value="Inprogress">Inprogress</option>
                            <option value="Ready for test">Ready for test</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <button type="submit" className="task_submit">+ ADD</button>
                    </div>
                    </div>

   
                </form>
            </header>
        </div>
    )

}

export default Taskform;
