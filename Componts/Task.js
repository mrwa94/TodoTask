export  const Task = (props) => {
    return <div className='todoList'>
    <h1>{props.taskName}</h1>
    {/* <button>Complete</button> */}
    <button className='' onClick={() => props.deleteTask(props.id)}>Delete</button>
    
</div>;


}