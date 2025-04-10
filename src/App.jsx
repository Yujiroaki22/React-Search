import React, { useEffect, useState } from 'react'
import Todo from './components/todo';
import Search from './components/Search';

const App = () => {
  const[todos,setTodos] =useState([]);

    const fetchTodo = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTodos(data)
      };
  
  useEffect (() => {
    fetchTodo();
  },[]);


  return (
    <section className=  " w-1/2 mx-auto">
      <Search todos={todos} setTodos={setTodos}/>
      <div>
      
      <p className='text-right mt-5 font-medium'>total todo -{todos .length}</p>
    {
      todos.length ? (
        <div className='grid grid-cols-2 gap-3 mt-6'>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id}/>

      ))}
      
    </div>) : (<p className='text-medium text-red-600 font-bold text-center'>There is no todo.</p>
      )
    }
    </div>
    </section>
    
  )
}

export default App