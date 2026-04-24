import React, { useState } from 'react'
import UserIcon from '../assets/UserIcon'
import LockIcon from '../assets/LockIcon'
import { Link } from 'react-router'
import { loginUser } from '../firebase'
import TickIcon from '../assets/TickIcon'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [errLabel, setErrLabel] = useState('');
  const [accCreated, setAccCreated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log([username, password, password == rpassword]);
    if (username == '' || password == '' || rpassword == '') {
      setErrLabel('Please enter all details.');
      return;
    }

    if (password != rpassword) {
      setErrLabel('Retype password correctly.');
      return;
    }

    if (password.length < 8) {
      setErrLabel('Password length should be greater than 8.');
      return;
    }
    setErrLabel('');

    const loggingAttemp = await loginUser(username + '@diary.app', password);
    console.log(loggingAttemp)
    if (loggingAttemp.success) {
      setAccCreated(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      setErrLabel("Couldn't create account.")
    }

  }


  return (
    <div className='w-full h-screen grid place-items-center bg-slate-950 '>
      <div className=' text-slate-100 py-3 px-4 rounded-xl  text-center w-full max-w-82.5'>
        <h2 className='font-bold text-3xl mb-2 mt-7'>Create Account</h2>
        <p className='text-sm text-slate-400 mb-3'>Enter username & password to continue</p>
        <InputBox type={'text'} placeholder={'Username'} value={username} setValue={setUsername} icon={<UserIcon clss={'h-5 text-slate-500'} />} />
        <InputBox type={'password'} placeholder={'Password'} value={password} setValue={setPassword} icon={<LockIcon clss={'h-5 text-slate-500'} />} />
        <InputBox type={'password'} placeholder={'Retype Password'} value={rpassword} setValue={setRPassword} icon={<LockIcon clss={'h-5 text-slate-500'} />} />
        <p className='text-left text-red-600 text-sm'>{errLabel}</p>
        <button onClick={handleSubmit} className={`${accCreated ? 'bg-green-400' : 'bg-white'} flex items-center justify-center text-black transition-colors rounded-xl mt-5 px-3 py-2.5 mb-1 w-full hover:text-white hover:bg-slate-900`}>{accCreated ? (<>Account Created <TickIcon clss={'ml-2 h-6'} /></>) : 'Create Account'}</button>
        {/* <button className='bg-green-500 text-black  rounded-xl mt-5 px-3 py-2.5 mb-1 w-full flex justify-center'>Account Created<TickIcon clss={'ml-2 h-6'} /></button> */}
        <p className='mt-5 text-sm text-slate-400'>Already having an account? <Link className='text-blue-400' to={'/login'}>Login</Link></p>
      </div>
    </div>
  )
}

const InputBox = ({ type, placeholder, value, setValue, icon }) => {
  return (<div className='flex items-center p-2 border-2 mb-2 border-slate-500 rounded-xl'>
    {icon}
    <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className=' ml-2' />
  </div>);
}

export default SignUp