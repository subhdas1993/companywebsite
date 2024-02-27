import React from 'react'
import SVGIMG from '../../../src/serv-icons/0.png'
import SVGIMG2 from '../../../src/serv-icons/1.png'
import SVGIMG3 from '../../../src/serv-icons/2.png'
import ServiceCourseLinkButton from '../ServiceCourseLinkButton/ServiceCourseLinkButton'

function CourseFlexBox() {
  return (
    <>
      <div className='flex sm:justify-between items-center flex-col sm:flex-row flex-wrap xl:flex-nowrap'>
        <div className='basis-full sm:basis-1/2 order-1'>
        {/* <div className='basis-full sm:basis-1/2 xl:basis-1/3 order-1'> */}
          <div className='p-4'>
            <div className='h-20 flex justify-between items-center border-b border-slate-500'>
              <div className='w-12'>
                <img src={SVGIMG} alt="svgimg1" />
              </div>
              <div className='basis-5/6 text-xl font-medium px-5'>Digital Marketing</div>
            </div>
            <div className='pt-6'>This digital marketing certification course gives you an in-depth understanding and advanced knowledge of digital marketing</div>
            <ServiceCourseLinkButton link="/courses/digital_marketing"/>
          </div>
          <div className='p-4'>
            <div className='h-20 flex justify-between items-center border-b border-slate-500'>
              <div className='w-12'>
                <img src={SVGIMG3} alt="svgimg3" />
              </div>
              <div className='basis-5/6 text-xl font-medium px-5'>Web Design</div>
            </div>
            <div className='pt-6'>A Web Designer develop the design, layout, and graphics of a website & often coordinate with a web developer for coding of a website.</div>
            <ServiceCourseLinkButton link="/courses/web_design"/>
          </div>
        </div>
        {/* <div className='basis-full sm:basis-1/2 xl:basis-1/3 order-3 xl:order-2 mx-0 sm:mx-auto xl:mx-0'>
          <div className='p-4'>
            <div className='h-20 flex justify-between items-center border-b border-slate-500'>
              <div className='w-12'>
                <img src={SVGIMG2} alt="svgimg2" />
              </div>
              <div className='basis-5/6 text-xl font-medium px-5'>3-in-1 Master Course</div>
            </div>
            <div className='pt-6'>This course is the package which includes digital marketing, graphic designing and web designing.</div>
            <a href="http://www.eagletechmedia.com/course/" target="_blank"  className='portrait:text-[2.4vmin] landscape:text-[2.4vmin] lg:landscape:text-[1.8vmin] block mx-auto w-fit mt-5 uppercase px-[3vmin] py-2 border rounded-3xl buttonstyle outline-0 outline-transparent outline-none' style={{cursor:"none"}}>read more</a>
          </div>
        </div> */}
        {/* <div className='basis-full sm:basis-1/2 xl:basis-1/3 order-2 xl:order-3'> */}
        <div className='basis-full sm:basis-1/2 order-1'>
          <div className='p-4'>
            <div className='h-20 flex justify-between items-center border-b border-slate-500'>
              <div className='w-12'>
                <img src={SVGIMG3} alt="svgimg3" />
              </div>
              <div className='basis-5/6 text-xl font-medium px-5'>Graphic Designing</div>
            </div>
            <div className='pt-6'>Our course is the best Graphics Design course for those who want expertise in UI, UX, Photoshop, Illustrator and Indesign.</div>
            <ServiceCourseLinkButton link="/courses/graphic_design"/>
          </div>
          <div className='p-4'>
            <div className='h-20 flex justify-between items-center border-b border-slate-500'>
              <div className='w-12'>
                <img src={SVGIMG} alt="svgimg1" />
              </div>
              <div className='basis-5/6 text-xl font-medium px-5'>Full Stack Development</div>
            </div>
            <div className='pt-6'>The Full Stack Development enhances the web developing skills for a website.</div>
            <ServiceCourseLinkButton link="/courses/full_stack_web_development"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseFlexBox