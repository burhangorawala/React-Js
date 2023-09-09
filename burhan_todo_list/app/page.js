"use client"
import React,{ useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submitHandler = (e)=>{
      e.preventDefault()
      console.log(title)
      console.log(desc)
      settitle("")
      setdesc("")


  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center' >Burhan's todo list</h1>
    <form onSubmit={submitHandler} className='item-center '>
     <input 
     type='text' 
     className='text-2xl border-zinc-800 border-4 mt-5 mx-5 px-4 py-2 rounded'
     placeholder='Enter Title here'
     value={title}
     onChange={(e)=>{
      settitle(e.target.value)
   
     }}
     />

<input 
     type='text' 
     className='text-2xl border-zinc-800 border-4 mt-5 m-8 mx-4 px-4 py-2 rounded '
     placeholder='Enter Description here'
     value={desc}
     onChange={(e)=>{
      setdesc(e.target.value)

     }}
     />

     <button className='bg-black text-white font-bold px-4 py-3 text-2xl rounded m-5'>Add Task</button>

    </form>
    </>
  )
}

export default page