import React from 'react'
import DownArrow from '../assets/DownArrow';

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Calender />
    </div>
  )
}

const Calender = () => {

  const today = new Date();
  const firstDayofMonth = new Date(`1-${today.getMonth() + 1}-${today.getFullYear()}`).getDay() + 2;
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

  let i = 1;

  return <>
    <div className='py-2 px-4 bg-slate-50 border-b border-slate-200'>
      <div className='flex items-center pb-3 pt-1'>
        <h1 className='font-bold text-2xl mr-2'>April, 2026</h1>
        <DownArrow />
      </div>
      <div className='grid grid-cols-7 gap-2 text-center text-sm'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(elem => <div className='uppercase text-slate-400 text-[12px]'>{elem}</div>)}
        {Array.from({ length: 35 }, (elem, index) => <p className='aspect-square w-full  grid place-items-center border-purple-400 rounded-xl' style={index - firstDayofMonth == today.getDate() ? { background: '#3F15EA', color: 'white' } : {}}>{index > firstDayofMonth ? (i <= lastDay ? i++ : <span className='text-slate-300'>{index - (lastDay + firstDayofMonth)}</span>) : <span className='text-slate-300'>{lastDayOfLastMonth + index - firstDayofMonth - 1}</span>}</p>)}
      </div>
    </div>
  </>
}

export default Home