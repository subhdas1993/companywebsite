import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import ServicesFlexBox from '../ServicesFlexBox/ServicesFlexBox'

import IMG from '/images/courses_services/project-start1.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import CourseFlexBox from '../CourseFlexBox/CourseFlexBox'

function CourseServiceLayout({ webcontent1, webcontent2, webcontent3, heading }) {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className='w-full lg:w-10/12 mx-auto font-[Sora]'>
        {
          (heading === "SEO" || heading === "Social Media Marketing" || heading === "Web Development" || heading === "Logo Design" || heading === "Product Packaging" || heading === "Lead Generation")

          &&

          (<>
            <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
              <div style={{ backgroundImage: `url(${webcontent1.img1})` }} className='block md:hidden w-3/4 mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>
              <div className='block md:hidden w-full p-4' data-aos="zoom-in">
                <div className='text-lg'>{webcontent1.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent1.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para1}</div>
                <div className='text-lg my-3 font-semibold'>{webcontent1.head3}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para2}</div>
                <div className='text-lg my-3 font-semibold'>{webcontent2.head1}</div>
                <div className='text-lg font-light text-justify'>{webcontent2.para1}</div>
              </div>
              <div className='hidden md:block md:basis-[48%]' data-aos="fade-right">
                <div className='text-lg'>{webcontent1.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent1.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para1}</div>
                <div className='text-lg my-3 font-semibold'>{webcontent1.head3}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para2}</div>
                <div className='text-lg my-3 font-semibold'>{webcontent2.head1}</div>
                <div className='text-lg font-light text-justify'>{webcontent2.para1}</div>
              </div>
              <div style={{ backgroundImage: `url(${webcontent1.img1})` }} className='hidden md:block md:basis-[48%] aspect-square bg-contain bg-no-repeat bg-center' data-aos="fade-left">  </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
              <div style={{ backgroundImage: `url(${webcontent1.img2})` }} className='hidden md:block basis-[48%] aspect-square bg-contain bg-no-repeat bg-center' data-aos="fade-right"></div>
              <div style={{ backgroundImage: `url(${webcontent1.img2})` }} className='block md:hidden w-3/4 mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>
              <div className='block md:hidden w-full p-4' data-aos="zoom-in">
                <div className='text-lg'>{webcontent3.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent3.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent3.para1}</div>
                {webcontent3.para2 !== null && <div className='text-lg mt-3 font-light text-justify'>{webcontent3.para2}</div>}
              </div>
              <div className='hidden md:block md:basis-[48%]' data-aos="fade-left">
                <div className='text-lg'>{webcontent3.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent3.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent3.para1}</div>
                {webcontent3.para2 !== null && <div className='text-lg mt-3 font-light text-justify'>{webcontent3.para2}</div>}
              </div>
            </div>
          </>)
        }

        {
          (heading === "Digital Marketing" || heading === "Graphic Designing" || heading === "Full Stack Development" || heading === "Web Designing" || heading === "3-in-1 Master Course")

          &&

          (<>
            <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
              <div style={{ backgroundImage: `url(${webcontent1.img1})` }} className='block md:hidden w-3/4 mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>
              <div className='block md:hidden w-full p-4' data-aos="zoom-in">
                <div className='text-lg'>{webcontent1.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent1.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para1}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para21}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para22}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para23}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para24}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para25}</div>
              </div>
              <div className='hidden md:block md:basis-[48%]' data-aos="fade-right">
                <div className='text-lg'>{webcontent1.head1}</div>
                <div className='text-5xl my-4 font-semibold'>{webcontent1.head2}</div>
                <div className='text-lg font-light text-justify'>{webcontent1.para1}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para21}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para22}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para23}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para24}</div>
                <div className='text-lg my-4 font-semibold text-justify'>{webcontent1.para25}</div>
              </div>
              <div style={{ backgroundImage: `url(${webcontent1.img1})` }} className='hidden md:block md:basis-[48%] aspect-square bg-contain bg-no-repeat bg-center' data-aos="fade-left"></div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
              <div style={{ backgroundImage: `url(${webcontent1.img2})` }} className='hidden md:block basis-[48%] aspect-square bg-contain bg-no-repeat bg-center' data-aos="fade-right"></div>
              <div style={{ backgroundImage: `url(${webcontent1.img2})` }} className='block md:hidden w-3/4 mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>

              <div className='block md:hidden w-full p-4' data-aos="zoom-in">
                <div className='text-5xl my-4 font-semibold'>{webcontent2.head1}</div>
                <div className='text-lg font-light text-justify'>{webcontent2.para1}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head21}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head22}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head23}</div>
              </div>
              <div className='hidden md:block md:basis-[48%]' data-aos="fade-left">
                <div className='text-5xl my-4 font-semibold'>{webcontent2.head1}</div>
                <div className='text-lg font-light text-justify'>{webcontent2.para1}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head21}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head22}</div>
                <div className='text-xl my-4 font-semibold'>{webcontent2.head23}</div>
              </div>
            </div>
          </>)
        }
      </div>
      {
        (heading === "SEO" || heading === "Social Media Marketing" || heading === "Web Development" || heading === "Logo Design" || heading === "Product Packaging" || heading === "Lead Generation")

        &&

        (<>
          <div className='text-center text-md' data-aos="zoom-in">DIGITAL MARKETING</div>
          <div className='text-center text-4xl' data-aos="zoom-in">Core Services</div>
          <div data-aos="zoom-in">
            <ServicesFlexBox />
          </div>
        </>)
      }
      <div className='w-full lg:w-10/12 mx-auto'>
        {
          (heading === "SEO" || heading === "Social Media Marketing" || heading === "Web Development" || heading === "Logo Design" || heading === "Product Packaging" || heading === "Lead Generation")

          &&

          (<>
            <div className='flex flex-col md:flex-row justify-between items-center mb-20 overflow-x-hidden'>
              <div style={{ backgroundImage: `url(${IMG})` }} className='hidden md:block basis-[48%] aspect-square bg-contain bg-no-repeat bg-center' data-aos="fade-right"></div>
              <div style={{ backgroundImage: `url(${IMG})` }} className='block md:hidden w-3/4 mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>
              <div className='block md:hidden w-full p-4' data-aos="zoom-in">
                <div className='text-lg'>GET STARTED</div>
                <div className='text-5xl my-4 font-semibold'>We Like to Start Your Project With Us</div>
                <div className='text-lg font-light text-justify'>If you are struggling with poor online visibility, ranking, and traffic, your business growth is at stake. Only a top SEO agency like EAGLE TECH MEDIA can help you grow. Don't experiment, just call the SEO Services experts like us. With our customized SEO plans designed for the businesses like you, we will make your business a huge success. Let us handle your SEO campaigns.</div>
              </div>

              <div className='hidden md:block md:basis-[48%]' data-aos="fade-left">
                <div className='text-lg'>GET STARTED</div>
                <div className='text-5xl my-4 font-semibold'>We Like to Start Your Project With Us</div>
                <div className='text-lg font-light text-justify'>If you are struggling with poor online visibility, ranking, and traffic, your business growth is at stake. Only a top SEO agency like EAGLE TECH MEDIA can help you grow. Don't experiment, just call the SEO Services experts like us. With our customized SEO plans designed for the businesses like you, we will make your business a huge success. Let us handle your SEO campaigns.</div>
              </div>
            </div>
          </>)
        }
      </div>

      {
        (heading === "Digital Marketing" || heading === "Graphic Designing" || heading === "Full Stack Development" || heading === "Web Designing" || heading === "3-in-1 Master Course")

        &&

        (<>
          <div className='text-center text-2xl sm:text-3xl lg:text-4xl w-full lg:w-1/4 mx-auto mb-3 lg:mb-5' data-aos="zoom-in">Courses that make you industry-ready</div>
          <div className='text-center text-base lg:text-lg w-full lg:w-1/3 mx-auto' data-aos="zoom-in">Join our industry-oriented courses to build high-in-demand career skills for a brighter future.</div>
          <div data-aos="zoom-in">
            <CourseFlexBox />
          </div>
        </>)
      }
      <div className='border-t lg:portrait:pt-10'>
        <Footer />
      </div>
    </>
  )
}

export default CourseServiceLayout