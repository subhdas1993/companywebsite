import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import RMB from '../ReadMoreButton2/ReadMoreButton2.module.css';
import CIR from '../ReadMoreButton2/circle-star.svg';
import { useNavigate } from 'react-router-dom';

function ReadMoreButton2({ link }) {
  const navigate = useNavigate();

  return (
    <>
      {link !== "3in1" &&
        <>
          <div className={`${RMB.mainButton} landscape:w-1/6 portrait:w-1/6 rounded-full aspect-square mt-10 overflow-hidden relative portrait:mb-[2vmin] portrait:mx-auto`} onClick={() => navigate(link)}>
            <div className='w-full h-full flex flex-col justify-center items-center absolute z-[3] bg-transparent'>
              <div className='mb-[1vmin] landscape:scale-[0.8] portrait:scale-[1.1]'><BsArrowUpRight /></div>
              <div className='uppercase landscape:text-[2.5vmin] lg:landscape:text-[1.4vmin] portrait:text-[1.7vmin] lg:portrait:text-[1.2vmin]'>read more</div>
            </div>
            <img src={CIR} alt="star" width="100%" />
          </div>
        </>
      }

      {
        link === "3in1" &&
        <>
          <a className={`${RMB.mainButton} block landscape:w-1/6 portrait:w-1/6 rounded-full aspect-square mt-10 overflow-hidden relative portrait:mb-[2vmin] portrait:mx-auto`} href="http://www.eagletechmedia.com/course/" target="_blank">
            <div className='w-full h-full flex flex-col justify-center items-center absolute z-[3] bg-transparent'>
              <div className='mb-[1vmin] landscape:scale-[1.8] portrait:scale-[1.2]'><BsArrowUpRight /></div>
              <div className='uppercase text-[1.5vmin] 2xl:text-base'>read more</div>
            </div>
            <img src={CIR} alt="star" width="100%" />
          </a>
        </>
      }
    </>
  )
}

export default ReadMoreButton2