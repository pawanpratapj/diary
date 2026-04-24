import React from 'react'
import UserIcon from '../assets/UserIcon'
import sittingIcon from '../assets/loginimg.svg'
import LockIcon from '../assets/LockIcon'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='w-full h-screen grid place-items-center bg-slate-950 '>
      <div className=' text-slate-100 py-3 px-4 rounded-xl  text-center w-full max-w-82.5'>
        <img src={sittingIcon} alt="" className='drop-shadow-xl bg-clip-border loginImg drop-shadow-slate-700 max-w-48 mx-auto' />
        <h2 className='font-bold text-3xl mb-2 mt-7'>Sign In</h2>
        <p className='text-sm text-slate-300 mb-3'>Enter username & password to continue</p>
        <div className='flex items-center p-2 border-2 border-slate-500 mb-3 rounded-xl'>
          <UserIcon clss={'h-5 text-slate-500'} />
          <input type="text" placeholder='Username' className=' ml-2' />
        </div>
        <div className='flex items-center p-2 border-2 border-slate-500 rounded-xl'>
          <LockIcon clss={'h-5 text-slate-500'} />
          <input type="password" placeholder='Password' className=' ml-2' />
        </div>
        <button className='bg-white text-black  rounded-xl mt-5 px-3 py-2.5 mb-1 w-full hover:text-white hover:bg-slate-900'>Sign In</button>
        <p className='mt-5 text-sm text-slate-400'>Haven't any account? <Link className='text-blue-400' to={'/signup'}>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login