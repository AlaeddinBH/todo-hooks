import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({task, del, completed,edited}) => {
  return <div>
      {task.map((el,i)=>
        <TodoCard task={el} key={(i)} del={del} completed={completed} edited={edited} />)}
  </div>;
};

export default TodoList;
