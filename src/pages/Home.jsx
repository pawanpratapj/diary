import React, { useEffect, useRef, useState } from 'react'
import DownArrow from '../assets/DownArrow';
import NavBar from '../components/Navbar';
import PlusIcon from '../assets/PlusIcon';
import { Link } from 'react-router';
import TodayDate, { monthFull } from '../components/TodayDate';

const Home = () => {

  return (
    <div className='w-full h-screen bg-slate-950 text-white overflow-y-scroll'>
      <NavBar />
      <Calender months={monthFull} />
      <div className='px-4 py-4'>
        <h1 className='font-extralight mb-2 text-3xl'><TodayDate /></h1>
        <Link to={'/create'}>
          <button className='bg-slate-300 text-slate-800 shadow shadow-slate-700  w-full py-2 rounded-xl flex items-center justify-center'><span className='mr-1'><PlusIcon /> </span>Create a Note</button>
        </Link>
        <p className="mt-5 text-sm text-slate-300"> Or Browse some of previous notes</p>
        <TodayNote heading={'Maybe not so good!'} body={`This guy is from Greece. I dont understand all these youtubers do they not check which places in India are good and which are not? Or they just intentionally pick the shittest places to be in because all their original subs are from west and will be easy to spread hate on India more efficiently.`} />
        <TodayNote heading={'Maybe not so good!'} body={`This guy is from Greece. I dont understand all these youtubers do they not check which places in India are good and which are not? Or they just intentionally pick the shittest places to be in because all their original subs are from west and will be easy to spread hate on India more efficiently.`} />
        <TodayNote heading={'Maybe not so good!'} body={`This guy is from Greece. I dont understand all these youtubers do they not check which places in India are good and which are not? Or they just intentionally pick the shittest places to be in because all their original subs are from west and will be easy to spread hate on India more efficiently.`} />
      </div>
    </div>
  )
}

const Calender = (props) => {

  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);

  const today = new Date();
  const firstDayofMonth = new Date(`1-${today.getMonth() + 1}-${today.getFullYear()}`).getDay() + 2;
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  let i = 1;


  const handleMonthDropdown = (e) => {


    //IMPORTANT, as it prevents event propagation from parent to child
    e.stopPropagation();

    setDropdownVisibility(prev => !prev); // Toggle visibility
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownVisibility(false); // Close dropdown if clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup
    };
  }, []);

  return <>
    <div className='py-2 px-5 bg-slate-900 border-b border-t border-slate-800'>
      <div className='flex items-center pb-2 mb-1 pt-1 relative' onClick={handleMonthDropdown}>
        <h1 className='font-bold text-2xl mr-2'>April, 2026</h1>
        <DownArrow />
        <div ref={dropdownRef} className={`homeMDropDown max-h-125 border absolute overflow-hidden border-slate-400 top-full left-0 rounded-xl bg-white ${dropdownVisibility ? '' : ' hideDropDown'}`}>
          {props.months.map((elem, index) => <div key={index} className='px-2 py-1 '>{elem}</div>)}
        </div>
      </div>
      <div className='grid grid-cols-7 gap-2 text-center text-sm'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((elem, index) => <div key={index} className='uppercase text-slate-500 text-[12px]'>{elem}</div>)}
        {Array.from({ length: 35 }, (elem, index) => <p key={index} className='aspect-square w-full  grid place-items-center border-purple-400 rounded-xl' ke={index} style={index - firstDayofMonth == today.getDate() ? { background: '#2b3963' } : {}}>{index > firstDayofMonth ? (i <= lastDay ? i++ : <span className='text-slate-700'>{index - (lastDay + firstDayofMonth)}</span>) : <span className='text-slate-700'>{lastDayOfLastMonth + index - firstDayofMonth - 1}</span>}</p>)}
      </div>
    </div>
  </>
}

const TodayNote = ({ heading, body }) => {

  const getRc = () => {
    const colors = [{
      //blue
      border: 'rgb(179 203 255)',
      background: 'rgb(215, 237, 255)',
      text: '#0043b4'
    },
    {
      //green
      border: 'rgb(146 255 204)',
      background: 'rgb(215 255 244)',
      text: 'rgb(2 119 72)'
    },
    {
      //purple
      text: 'rgb(136 29 200)',
      background: 'rgb(238 232 255)',
      border: 'rgb(206 181 210)'

    }];

    let rc = colors[Math.floor(Math.random() * colors.length)];
    console.log(rc);
    return rc;
  }
  // let randomColor = colors[randomNo];


  const [randomColor, setRandomColor] = useState('');

  useEffect(() => setRandomColor(getRc()), []);

  return (<div className={`py-3 px-4 mt-3 rounded-3xl border-slate-600 text-blue-200 bg-slate-800 border`} >
    <h3 className={`font-medium text-xl mb-1`}>{heading}</h3>
    <p className={`ellipsis text-sm`}>{body}</p>
  </div>);
}

export default Home;