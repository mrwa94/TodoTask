
import React , {useState} from 'react'
import '../App.css'
import {Task} from './Task'

export default function Todolist({props}) {
    const [todoList, setTodoList] = useState([]);
    const [newTask , setNewTask] = useState("");

    const handleChange = (event)=> {
       setNewTask(event.target.value);
    };

    const addTask =() => {
        const task = {
              id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
              taskName : newTask,
              complete : false,
        };

       setTodoList([...todoList , task]);
    };

    const deleteTask = (id) => {
        setTodoList( todoList.filter((task) => task.id !== id ));
        
    };
    const editTask = () => {

    };

  return (
    <div>
        <input  onChange= {handleChange} className="inputTask" placeholder='Enter your tasks'/>
        <button onClick={addTask} className="taskbtn">Add Task</button>
        <div className='list'>
           {todoList.map((task)=> {
            return <Task taskName={task.taskName} id ={task.id} deleteTask ={deleteTask}/>
           })}

        </div>
    </div>
  )
}
