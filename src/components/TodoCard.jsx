import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditTask from './EditTask';



const TodoCard = ({task, del, completed,edited}) => {
    

    

  return (
    <div className={task.isDone ? 'todo-row complete' : 'todo-row'}>
        <div onClick = {() => completed(task.id)}> {task.name} </div>
      
      <div className='icons'>
            <RiCloseCircleLine 
            onClick = {() => del(task.id)}
            className='delete-icon'
            />
            {/* <TiEdit 
           
            className='edit-icon'
            /> */}
            <EditTask task={task} edited={edited}/>
        </div>
    </div>
  )
}

export default TodoCard
