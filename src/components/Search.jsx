import React from 'react'
import { useState } from 'react'


const Search = ({todos,setTodos}) => {
    const [searchKey,setSearchkey]=useState("")

    const searchTodo = ()=>{
        const filteredTodo=todos.filter((todo)=> todo.title.includes(searchKey.toLowerCase()) );
        setTodos(filteredTodo);
        setSearchkey("");
      }

      
  return (
    <div>
        <h1 className="text-5xl text-center font-bold my-4 uppercase">React Search</h1>
        <input type='text' className="border-2 bor der-black focus-none rounded-md px-2 w-4/5"
        onChange={(e)=> setSearchkey(e.target.value)}
        value={searchKey}
        />
        <button className='bg-black ms-3 text-white rounded p-2 text-sm' 
        onClick={searchTodo}>
        search</button>
      </div> 
  )
}

export default Search