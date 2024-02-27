import React from 'react'
import TIMGSEC from '../ThirdImgSec/ThirdImgSec.module.css'
function ThirdImgSec() {
  return (
    <div>
      <section className='w-full lg:w-10/12 mx-auto'>
        <div className='flex flex-col lg:landscape:flex-row lg:portrait:flex-col justify-between pb-20'>
          <a className='block w-10/12 lg:w-[30%] portrait:w-10/12 mx-auto cursor-none' href="http://www.eagletechmedia.com/blog/single.php?id=152" target="_blank" style={{pointerEvents:'none'}}>
            <div className='w-full flex justify-between'>
              <div className='w-11/12'>
                <div className={`${TIMGSEC.sectionIMG1} w-full aspect-square bg-no-repeat bg-cover`}></div>
              </div>
              <div className={`${TIMGSEC.sectionWritingMode} w-1/12 origin-center rotate-[180deg] flex justify-end items-center portrait:h-1/2 landscape:h-full lg:landscape:h-1/2`}>
                <div className='flex justify-end items-center w-full h-full'>
                  <div className='pb-5'>July 26,2023</div>
                  <div className='h-1/4 w-1/12 border bg-white'></div>
                </div>
              </div>
            </div>
            <div className='portrait-[2vmax] landscape-[3vmax] pr-6 pt-4'>
              Benefits Of Social Media Marketing For Your Business.
            </div>
          </a>

          <a className='block w-10/12 lg:w-[30%] portrait:w-10/12 mx-auto cursor-none' href="http://www.eagletechmedia.com/blog/single.php?id=151" target="_blank" style={{pointerEvents:'none'}}>
            <div className='w-full flex justify-between'>
              <div className='w-11/12'>
                <div className={`${TIMGSEC.sectionIMG2} w-full aspect-square bg-no-repeat bg-cover bg-top`}></div>
              </div>
              <div className={`${TIMGSEC.sectionWritingMode} w-1/12 origin-center rotate-[180deg] flex justify-end items-center portrait:h-1/2 landscape:h-full lg:landscape:h-1/2`}>
                <div className='flex justify-end items-center w-full h-full'>
                  <div className='pb-5'>July 02,2023</div>
                  <div className='h-1/4 w-1/12 border bg-white'></div>
                </div>
              </div>
            </div>
            <div className='portrait-[2vmax] landscape-[3vmax] pr-6 pt-4'>
              Importance of Digital Marketing: Top 5 Reasons Your Business Needs it.
            </div>
          </a>

          <a className='block w-10/12 lg:w-[30%] portrait:w-10/12 mx-auto cursor-none' href="http://www.eagletechmedia.com/blog/single.php?id=70" target="_blank" style={{pointerEvents:'none'}}>
            <div className='w-full flex justify-between'>
              <div className='w-11/12'>
                <div className={`${TIMGSEC.sectionIMG3} w-full aspect-square bg-no-repeat bg-cover bg-top`}></div>
              </div>
              <div className={`${TIMGSEC.sectionWritingMode} w-1/12 origin-center rotate-[180deg] flex justify-end items-center portrait:h-1/2 landscape:h-full lg:landscape:h-1/2`}>
                <div className='flex justify-end items-center w-full h-full'>
                  <div className='pb-5'>March 27,2023</div>
                  <div className='h-1/4 w-1/12 border bg-white'></div>
                </div>
              </div>
            </div>
            <div className='portrait-[2vmax] landscape-[3vmax] pr-6 pt-4'>
              5 most demanded job roles in tech startup ecosystem.
            </div>
          </a>

        </div>
      </section>
    </div>
  )
}

export default ThirdImgSec