import React, { useEffect, useState } from 'react'
import Todo from './components/todo';

const App = () => {
const[todos,setTodos] =useState([]);
const [searchKey,setSearchkey]=useState("")

  const fetchTodo = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data)
  };

  useEffect (() => {
    fetchTodo();
  },[]);
const searchTodo = ()=>{
  const filteredTodo=todos.filter((todo)=> todo.title.includes(searchKey.toLowerCase()) );
  setTodos(filteredTodo);
  setSearchkey("");
}

  return (
    <section className=  " w-1/2 mx-auto">
      <div>
      <div>
        <h1 className="text-5xl text-center font-bold my-4 uppercase">React Search</h1>
        <input type='text' className="border-2 bor der-black focus-none rounded-md px-2 w-4/5"
        onChange={(e)=> setSearchkey(e.target.value)}
        value={searchKey}
        />
        <button className='bg-black ms-3 text-white rounded p-2 text-sm' onClick={searchTodo}>search</button>
      </div>
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