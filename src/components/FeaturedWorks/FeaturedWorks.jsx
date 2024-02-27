import React from 'react'
import { BsDot } from "react-icons/bs";

function FeaturedWorks({head1,head2,head3}) {
  return (
    <>
      <div className='w-11/12 lg:w-10/12 mx-auto py-7 mt-4 lg:mt-20'>
        <section className='flex flex-col lg:flex-row justify-between items-center'>
          <div className={`w-full ${head1 === "Testimonial" ? '' : 'lg:basis-1/2'} flex flex-col justify-center items-start`}>
            <div className='flex justify-between items-center p-3 md:p-0 rounded-3xl border-2 border-solid border-[rgb(128,128,128)]'><BsDot className='text-[#DAA520] text-xl md:text-[3vmax]' />{head1}<BsDot className='text-[#DAA520] text-xl md:text-[3vmax]' /></div>
            <div className='my-10 text-4xl lg:text-7xl font-semibold'>{head2}</div>
          </div>
          <div className={`${head1 === "Testimonial" ? 'hidden' : ''} w-full lg:basis-1/3 p-0 text-justify`}>{head3}</div>
        </section>
      </div>
    </>
  )
}

export default FeaturedWorks