import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import Course_IntersectionObserver from '../../components/Course_IntersectionObserver/Course_IntersectionObserver'
import Footer from '../../components/Footer/Footer'
import { ParallaxProvider,Parallax } from 'react-scroll-parallax'
import RMBForServiceCourse from '../../components/RMBForServiceCourse/RMBForServiceCourse'

function Courses() {
  return (
    <>
      <PageHead heading="Courses"/>
      <Course_IntersectionObserver/>
      <div className='relative'>
      <ParallaxProvider>
      <div className='relative font-[Sora]'>
        <Parallax speed={10}>
          <div className='w-11/12 h-[50vh] ml-auto bg-[url("../servicecourseimg.jpg")]'></div>
        </Parallax>
        <Parallax speed={20}>
        <div className='absolute w-5/6 h-[50vh] bg-black bottom-[-100%] flex justify-between items-center pr-6'>
          <div className='w-5/6 px-[8vw] text-[8vmin] font-bold h-full flex items-center leading-tight'>
            Want to learn something to change your life?
          </div>
          <div className='w-1/6 flex items-center'>
            <RMBForServiceCourse link="/contact" />
          </div>
        </div>
        </Parallax>
      </div>
      </ParallaxProvider>
      <Footer/>
      </div>
    </>
  )
}

export default Courses