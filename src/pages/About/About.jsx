import React, { useEffect } from 'react'
import PageHead from '../../components/PageHead/PageHead'

import IMG1 from '/meeting2.jpg'
import IMG2 from '/sq1.jpg'
import IMG3 from '/sq2.jpg'
import DOTS from '/dots2.png'

import LOGO from '../../assets/clientlogo.png'
import AccordionList from './AccordionList'

import ABOUTCSS from '../About/About.module.css'
import ETMwebeffect from './ETMwebeffect'
import Footer from '../../components/Footer/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <>
      <PageHead heading="About" />
      <div className='font-[Sora] relative'>
        <div>
          <div className='flex flex-col md:flex-row md:justify-between items-center mb-10 portrait:px-5 landscape:p-10 lg:portrait:mb-0'>
            <div style={{ backgroundImage: `url(${IMG1})` }} className='block md:hidden w-full mx-auto aspect-square bg-contain bg-no-repeat bg-center' data-aos="zoom-in"></div>
            <div className='block md:hidden w-full portrait:pt-5' data-aos="zoom-in">
              <div className='text-3xl xl:text-5xl font-semibold'>
                Enjoy Full-Service Digital Marketing Expertise
              </div>
              <div className='mt-5 md:mt-0 text-base md:text-lg leading-loose text-justify font-medium'>
                As a Digital Marketing company, we offer Technical SEO Audits, Search Engine Optimization Strategies, Google AdWords Advertising (Search Engine Marketing, Pay Per Click Management & Video Advertising), Social Media Strategies and Creative Content Resulting in Fully Managed and Highly Successful Online Marketing Campaigns. We create digital experiences which stick with audiences and also reach the end objective.
                Undoubtedly, your business can benefit from the services offered by Eagle TEch Media, due to their expertise in the field.We can drive brands towards success with our top-notch analytical thinking. We help Brands derive the value it desires and deserves. So with us, take your marketing to the next level; turn your vision into reality.
              </div>
              <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className='text-xl p-3 text-center'>
                  <div className='text-5xl'>276</div>
                  <div>Completed Projects</div>
                </div>
                <div className='text-xl p-3 text-center'>
                  <div className='text-5xl'>6548</div>
                  <div>Working hours were spent</div>
                </div>
                <div className='text-xl p-3 text-center'>
                  <div className='text-5xl'>50</div>
                  <div>Expert team members</div>
                </div>
              </div>
            </div>
            <div className='hidden md:block md:basis-[48%] self-stretch' data-aos="fade-right">
              <div className='flex flex-col justify-between h-full'>
                <div className='text-3xl xl:text-5xl font-semibold'>
                  Enjoy Full-Service Digital Marketing Expertise
                </div>
                <div className='text-base md:text-lg text-justify font-medium'>
                  <p className='leading-[5.8vh] lg:portrait:leading-loose'>
                    As a Digital Marketing company, we offer Technical SEO Audits, Search Engine Optimization Strategies, Google AdWords Advertising (Search Engine Marketing, Pay Per Click Management & Video Advertising), Social Media Strategies and Creative Content Resulting in Fully Managed and Highly Successful Online Marketing Campaigns. We create digital experiences which stick with audiences and also reach the end objective.
                    Undoubtedly, your business can benefit from the services offered by Eagle TEch Media, due to their expertise in the field.We can drive brands towards success with our top-notch analytical thinking. We help Brands derive the value it desires and deserves. So with us, take your marketing to the next level; turn your vision into reality.
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='text-xl p-3 text-center'>
                    <div className='text-5xl'>276</div>
                    <div>Completed Projects</div>
                  </div>
                  <div className='text-xl p-3 text-center'>
                    <div className='text-5xl'>6548</div>

                    <div>Working hours were spent</div>
                  </div>
                  <div className='text-xl p-3 text-center'>
                    <div className='text-5xl'>50</div>
                    <div>Expert team members</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${IMG1})` }} className='hidden md:block md:basis-[48%] aspect-square bg-cover bg-no-repeat bg-center' data-aos="fade-left">  </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between md:justify-center items-stretch md:items-center md:h-[70vh] lg:portrait:h-fit my-0 md:my-5 lg:my-0 lg:portrait:my-0' data-aos="zoom-in">
          <div className='relative basis-full md:basis-1/3 h-fit p-10 md:p-0'>
            <div className='relative aspect-square overflow-x-hidden'>
              <div className='absolute left-[16%] w-[0.7vw] h-[16vh] md:w-[0.3vw] md:h-[20vh] bg-white'></div>
              <div style={{ backgroundImage: `url(${IMG2})` }} className='absolute left-[15%] w-5/6 bg-center bg-no-repeat bg-contain aspect-square'>
                <div style={{ backgroundImage: `url(${DOTS})` }} className='absolute top-3/4 start-2/3 w-2/5 aspect-square z-[-1]'></div>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${IMG3})` }} className='absolute bottom-[12%] md:top-1/2 w-1/3 md:w-1/2 bg-center bg-no-repeat bg-cover aspect-square rounded-3xl'></div>
          </div>
          <div className='basis-full md:basis-1/3 md:ml-10 p-10 md:p-0'>
            <div className='text-lg'>WHAT WE DO</div>
            <div className='text-3xl my-5'>We Help to Website Growth With Next Level Visitor</div>
            <div>
              <AccordionList />
            </div>
          </div>
        </div>

        <div className='bg-[url("../images/graph.png")] border border-transparent'>
          <div className='w-5/6 md:w-4/5 my-20 overflow-hidden md:py-14 mx-auto' data-aos="zoom-out">
            <div className='flex flex-wrap justify-center items-center scale-100'>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
              <div className={`${ABOUTCSS.cclogo} md:m-1 relative basis-1/2 md:basis-1/4 aspect-video flex justify-center items-center border rounded-xl`}>
                <div style={{ backgroundImage: `url(${LOGO})` }} className='w-4/5 h-1/5 bg-no-repeat bg-center bg-contain absolute'></div>
                <ETMwebeffect />
              </div>
            </div>
          </div>
        </div>
        <div className='border-t lg:portrait:pt-10'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About