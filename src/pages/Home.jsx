import React, { useEffect, useState } from 'react'
import DownArrow from '../assets/DownArrow';
import NavBar from '../components/Navbar';

const Home = () => {
  const today = new Date();
  let monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <Calender months={monthFull} />
      <div className='px-4 py-4'>
        <h1 className='font-extralight mb-3 text-3xl'>{today.getDate()} {monthFull[today.getMonth()]} {today.getFullYear()}</h1>
        <TodayNote heading={'Maybe not so good!'} body={`This guy is from Greece. I dont understand all these youtubers do they not check which places in India are good and which are not? Or they just intentionally pick the shittest places to be in because all their original subs are from west and will be easy to spread hate on India more efficiently.`} />
      </div>
    </div>
  )
}

const Calender = (props) => {

  const today = new Date();
  const firstDayofMonth = new Date(`1-${today.getMonth() + 1}-${today.getFullYear()}`).getDay() + 2;
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

  let i = 1;

  return <>
    <div className='py-2 px-5 bg-slate-50 border-b border-t border-slate-200'>
      <div className='flex items-center pb-2 mb-1 pt-1 relative'>
        <h1 className='font-bold text-2xl mr-2'>April, 2026</h1>
        <DownArrow />
        <div className='border absolute overflow-hidden border-slate-400 top-full left-0 rounded-xl bg-white'>
          {props.months.map(elem => <div className='px-2 py-1 '>{elem}</div>)}
        </div>
      </div>
      <div className='grid grid-cols-7 gap-2 text-center text-sm'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(elem => <div className='uppercase text-slate-400 text-[12px]'>{elem}</div>)}
        {Array.from({ length: 35 }, (elem, index) => <p className='aspect-square w-full  grid place-items-center border-purple-400 rounded-xl' style={index - firstDayofMonth == today.getDate() ? { background: '#3F15EA', color: 'white' } : {}}>{index > firstDayofMonth ? (i <= lastDay ? i++ : <span className='text-slate-300'>{index - (lastDay + firstDayofMonth)}</span>) : <span className='text-slate-300'>{lastDayOfLastMonth + index - firstDayofMonth - 1}</span>}</p>)}
      </div>
    </div>
  </>
}

const TodayNote = ({ heading, body }) => {

  const getRc = () => {
    const colors = ['blue', 'pink', 'green', 'emerald', 'purple'];

    let rc = colors[Math.floor(Math.random() * colors.length)];
    console.log(rc);
    return rc;
  }
  // let randomColor = colors[randomNo];


  const [randomColor, setRandomColor] = useState('');

  useEffect(() => setRandomColor(getRc()), []);

  return (<div className={`bg-${randomColor}-100 py-3 px-4 mt-2 rounded-3xl border border-${randomColor}-200`}>
    <h3 className={`font-medium text-${randomColor}-800 text-xl mb-1`}>{heading}</h3>
    <p className={`text-${randomColor}-600 ellipsis text-sm`}>{body}</p>
  </div>);
}

export default Home;