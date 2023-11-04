import  { useEffect, useState } from "react";
import './Todo.css'
import {ImCross} from 'react-icons/im';
export default function Todo() {
  let [task, setTask] = useState("");
  let [desc, setDesc] = useState("");
  let [data, setData] = useState([]);


  const taskhandler = (e) => {
    setTask(e.target.value);
    console.log(">>>>>>>>>>>", task);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
    console.log(">>>>>>>>>>>", desc);
  };

useEffect(()=>{
  let  todolist = JSON.stringify(data)
  console.log('>>>>>>>>>>>', todolist)
  localStorage.setItem('data',todolist)

  },[data])


  const addhandler = () => {
    if(task.trim()=='' || desc.trim()==''){
      return;
    }
    let obj = {
        Task:task,
        Desc:desc
    }
    setData([...data,obj])

    setTask('')
    setDesc('')

 
  };


  return (
    <>
      <div className="container">
          
          <h5 className="heading">Todo APP</h5>
          <input
            type="text"
            onChange={taskhandler}
            value={task}
            className="input my-2"
            placeholder="Enter task here"
          />
          <div className="row  ">
          <input
            type="text"
            onChange={descHandler}
            value={desc}
            className="w-25"
            placeholder="Enter description"
          />
        </div>
        <button onClick={addhandler} >Add Task</button>
        </div>
        <hr />
        <div className="screen  ">
          
            {
                
                data.map((data,index)=>(
                      <div key={index} className="card ">
                        <div className="cross">{<ImCross/>}</div>
                        <h2>{data.Task}</h2>
                        <h6>{data.Desc}</h6>
                      </div>
                ))

            }
        </div>
                 


    </>
  );
}
