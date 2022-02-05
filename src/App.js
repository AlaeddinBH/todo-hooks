import { useState } from 'react';
import { todos } from './data';
import './App.css';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';


function App() {
  const [task , setTask] = useState(todos);
  // console.log(task)

  // Handel delete 

  const handelDelete = (id) => {
    const deleteTask = [...task].filter(el => el.id !== id);
    setTask(deleteTask);

  }

  //adding task

  const handelAdd = (newTask) =>{
    setTask([...task,newTask]);
  };
  
  // handel complete 

  const handelComplete = (id) => {
    let taskCompleted = task.map((todo) => {
      if(todo.id === id ) {
        todo.isDone = !todo.isDone
      }
      return todo;
    });
    setTask(taskCompleted);

  };

  //handel edit 
  const editTask = (editedTask) => {
    setTask(task.map(el=>el.id===editedTask.id?{...el,...editedTask}:el))
    
  }
  

  return (
    <div className="todo-app">
      <h1>ToDo List</h1>
      <AddTask add={handelAdd}/>
      <TodoList task={task} del={handelDelete} completed={handelComplete}  edited={editTask}/>
    </div>
  );
}

export default App;
