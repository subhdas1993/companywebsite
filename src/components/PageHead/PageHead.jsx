import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import { useLocation } from 'react-router-dom';


function PageHead({ heading }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  return (
    <div className='h-[30vh] portrait:h-[14vh] lg:portrait:h-[20vh] relative'>
      <Marquee autoFill speed="40" className='h-full'>
        <span className='text-4xl md:text-7xl 2xl:text-9xl font-bold font-[Sora] uppercase mx-20'>{heading}</span>
        <span className='text-4xl md:text-7xl 2xl:text-9xl font-bold headingStyle1 font-[Sora] uppercase'>{heading}</span>
      </Marquee>
    </div>
  )
}

export default PageHead