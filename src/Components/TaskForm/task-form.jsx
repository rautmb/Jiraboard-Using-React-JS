
import './task-form.css';
import Tag from '../Tag/tag'
import { useState } from 'react';

const Taskform = ({setTasks}) => {

    // when we have multiplt state then we cna difine as below 

    const [taskdata, setTaskdata] = useState({
        task: '',
        status: 'Ready for developement',
        tags:[]
    });

    const handelchange = (e) => {
        const { name, value } = e.target;
        setTaskdata((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handelsubmit = (e) => {
        e.preventDefault();
        setTasks((prev)=>{
            return [...prev,taskdata]
        })

        // console.log(taskdata);
    }

    const selectedTag=(tag)=>{

        setTaskdata((prev)=>{
            const isSelected=prev.tags.includes(tag);
            const tags=isSelected ? prev.tags.filter((item)=>(item!=tag)):[...prev.tags,tag]

            return{...prev,tags}
        })

        // if(taskdata.tags.some((item)=>(item===tag)))
        // {
        //     const filterTags=taskdata.tags.filter((item)=>item!==tag);
        //     setTaskdata((prev)=>{
        //         return{...prev,tags:filterTags};
        //     });
        // }
        // else
        // {
        //     setTaskdata((prev)=>{
        //         return{...prev,tags:[...prev.tags,tag]}
        //     });

        // }
    }

    console.log(taskdata)


    const CheckTag=(tag)=>{
        return taskdata.tags.some((item)=>(item===tag))
    }

    // simple way to define state
    // const [task,setTask]=useState('');

    // const [status,setStatus]=useState('');

    // const handeltaskstatus=(e)=>{
    //     const vals=e.target.value;
    //     setStatus(vals);
    // }

    // const handelTask=(e)=>{
    //     const val=e.target.value;
    //     setTask(val);
    // }

    // console.log(task);
    // console.log(status);

    return (
        <div>
            <header className="app_header">
                <h1 className="app_heading">JiraBoard</h1>
                <form action="" onSubmit={handelsubmit}>
                    <input type="text" name='task' className="task_input" placeholder="please enter task" onChange={handelchange} />
                    <div className="button_main">
                        <div className="button_style">
                            <Tag tagName='DEV' selectedTag={selectedTag} selected={CheckTag('DEV')}/>
                            <Tag tagName='QA' selectedTag={selectedTag} selected={CheckTag('QA')}/>
                            <Tag tagName='Product Owner' selectedTag={selectedTag} selected={CheckTag('Product Owner')}/>
                        </div>
                        <div className="dropdown_style">
                            <select className="task_status" name='status' onChange={handelchange}>
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
