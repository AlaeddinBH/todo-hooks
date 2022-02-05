import React, { useState } from 'react';

const AddTask = ({ add }) => {
    const [input, setInput] = useState('')
    

    const handelChange = (e) => {
        setInput(e.target.value);
    };


    const handelSubmit = (e) => {
        e.preventDefault();
        const newTask = 
        {
            id: Math.random(),
            name : input,
            isDone : false
        }

        newTask.name.trim() === "" ? alert("Please enter a task") : add(newTask);
        
        setInput('')
    }



  return <div>
      <form className='todo-form' onSubmit={handelSubmit}>
          
        
           
            
             <input
                type="text"
                placeholder='Add a Task'
                value={input}
                name='text'
                className='todo-input'
                onChange={handelChange}
                 
            />
            <button className='todo-button' >Add Task</button>
           
            
        
      </form>
  </div>;
};

export default AddTask;
