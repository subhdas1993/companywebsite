import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import Service_IntersectionObserver from '../../components/Service_IntersectionObserver/Service_IntersectionObserver'
import Footer from '../../components/Footer/Footer'

import SVG from '../../serv-icons/0.png'
import RMBForServiceCourse from '../../components/RMBForServiceCourse/RMBForServiceCourse'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <PageHead heading="Services" />
      <Service_IntersectionObserver />
      <div className='relative'>
      <ParallaxProvider>
      <div className="w-full lg:w-10/12 mx-auto py-7 font-[Sora]">
        <section className="w-full">
          <div className="flex flex-col lg:flex-row justify-between">

            <div className="relative">
              <div className="w-[17rem] md:w-[22rem] lg:w-[23vw] h-[35rem] md:h-[42rem] lg:ml-0 md:ml-[18%] ml-[5%] lg:mt-0">
                <img src={"../images/1.jpg"} />
              </div>

              <div className="lg:w-[22rem] md:w-2/4 w-3/4 bg-[#161616] flex flex-col py-[4rem] px-4 lg:py-[4rem] lg:px-12 md:px-8 md:py-[6rem] absolute z-[2] top-[16%] left-[20%] lg:top-[16%] md:left-[30%] md:top-[20%]">
                <div className="my-3 lg:my-5 md:my-4">
                  <img src={SVG} alt='img' className="w-[3rem] lg:w-[4rem] md:w-[4rem]" />
                </div>

                <p className="mt-2 mb-5 lg:mt-5 lg:mb-8 md:my-5 lg:font-normal leading-normal lg:tracking-wide lg:text-base md:text-xl text-lg">We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
              </div>
            </div>

            <div className="basis-[48%] lg:px-0 px-5">
              <div className="lg:mt-[4rem] w-fit flex border rounded-full border-zinc-500 lg:text-sm tracking-widest lg:font-medium lg:py-2 lg:px-8 px-3 py-1">
                SERVICES
              </div>

              <div className="lg:text-lg leading-snug tracking-normal text-left mt-5">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials that communicate
                clearly.
              </div>

              <div className="text-[25px] lg:text-[40px] font-semibold leading-normal tracking-wide mt-8 flex flex-col justify-between">
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/seo')}>
                  <div className="text-2xl mr-8">01</div><div>SEO</div>
                </h1>
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/social_media_marketing')}>
                  <div className="text-2xl mr-8">02</div><div>Social Media Marketing</div>
                </h1>
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/web_development')}>
                  <div className="text-2xl mr-8">03</div><div>Web development</div>
                </h1>
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/logo_design')}>
                  <div className="text-2xl mr-8">04</div><div>Logo design</div>
                </h1>
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/product_packaging')}>
                  <div className="text-2xl mr-8">05</div><div>Product Packaging</div>
                </h1>
                <h1 className="cursor-none flex items-center" onClick={()=>navigate('/services/lead_generation')}>
                  <div className="text-2xl mr-8">06</div><div>Lead generation</div>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='relative font-[Sora]'>
        <Parallax speed={10}>
          <div className='w-11/12 h-[50vh] ml-auto bg-[url("../servicecourseimg.jpg")]'></div>
        </Parallax>
        <Parallax speed={20}>
        <div className='absolute w-5/6 h-[50vh] bg-black bottom-[-100%] flex justify-between items-center pr-6'>
          <div className='w-5/6 px-[8vw] text-[8vmin] font-bold h-full flex items-center leading-tight'>
            Have a project in mind?
            Let’s get to work.
          </div>
          <div className='w-1/6 flex items-center'>
            <RMBForServiceCourse link="/contact" />
          </div>
        </div>
        </Parallax>
      </div>
      </ParallaxProvider>
      <Footer />
      </div>
    </>
  )
}

export default Services