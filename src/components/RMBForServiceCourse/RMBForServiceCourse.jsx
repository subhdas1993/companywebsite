import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import RMB from '../RMBForServiceCourse/RMBForServiceCourse.module.css';
import CIR from '../RMBForServiceCourse/circle-star.svg';
import { useNavigate } from 'react-router-dom';

function RMBForServiceCourse({link}) {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${RMB.mainButton} landscape:w-3/4 portrait:w-full rounded-full aspect-square overflow-hidden relative`} onClick={()=>navigate(link)}>
        <div className='w-full h-full flex flex-col justify-center items-center absolute z-[3] bg-transparent'>
          <div className='mb-[1vmin] scale-[1.4]'><BsArrowUpRight /></div>
          <div className='uppercase landscape:text-[2vmin] portrait:text-[1.6vmin]'>ask me</div>
        </div>
        <img src={CIR} alt="star" width="100%"/>
      </div>
    </>
  )
}

export default RMBForServiceCourse