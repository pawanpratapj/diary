import React from 'react'
import NavBar from '../components/Navbar'
import TodayDate from '../components/TodayDate'
import LeftArrow from '../assets/LeftArrow'
import { Link } from 'react-router'

const CreateNote = () => {
  return (
    <div className='w-full h-screen px-5 py-3 bg-slate-950 flex flex-col'>
      <div className='flex items-center justify-between mb-5'>

        <button className='text-slate-100'><Link to={'/'}><LeftArrow /> </Link></button>

        <button className='bg-slate-700 rounded-md text-white py-1.5 px-3 text-sm '>Save Note</button>
      </div>
      <h1 contentEditable={true} className='font-bold text-white text-3xl outline-0 mb-3'>Note Title</h1>
      <div className='text-slate-400'>
        <p> <TodayDate /></p>
      </div>
      <textarea placeholder='How ware your day...' className='w-full outline-0 flex-1 mt-2 text-slate-100'></textarea>
      {/* <button className='bg-slate-800  mt-2 rounded-xl text-white py-2'>Save Note</button> */}
    </div>
  )
}

export default CreateNote