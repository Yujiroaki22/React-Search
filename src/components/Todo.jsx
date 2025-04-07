import React from 'react'

const Todo = ({todo}) => {
  return (
    <div  className='bg-black text-white p-3 rounded cursor-pointer'>
    <h1>title-{todo.title}</h1>
    <p>status-{todo.completed ? "finished" : "unfinished"}</p>
  </div>
  )
}

export default Todo