import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import RMB from '../ReadMoreButton/ReadMoreButton.module.css';
import CIR from '../ReadMoreButton/circle-star.svg';
import { useNavigate } from 'react-router-dom';

function ReadMoreButton({link}) {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${RMB.mainButton} landscape:w-1/6 portrait:w-1/4 rounded-full aspect-square mt-10 overflow-hidden relative`} onClick={()=>navigate(link)}>
        <div className='w-full h-full flex flex-col justify-center items-center absolute z-[3] bg-transparent'>
          <div className='mb-[1vmin] landscape:scale-[1.8] portrait:scale-[1.2]'><BsArrowUpRight /></div>
          <div className='uppercase text-[1.5vmin] 2xl:text-base'>read more</div>
        </div>
        <img src={CIR} alt="star" width="100%"/>
      </div>
    </>
  )
}

export default ReadMoreButton