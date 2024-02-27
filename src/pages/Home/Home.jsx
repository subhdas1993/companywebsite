import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import { BsDot } from "react-icons/bs";


import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import HOME from '../Home/Home.module.css'
import SVG1 from '../../assets/claw.png'
import PARAIMG from '../Home/images1/sectionimg3.jpg';

import HomeHorizontalsSec from '../../components/HomeHorizontalsSec/HomeHorizontalsSec';
import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';
import Section9th from '../../components/Section9th/Section9th';
import RIOComponent1 from '../../components/RIOComponents/RIOComponent1';
import RIOComponent2 from '../../components/RIOComponents/RIOComponent2';
import RIOComponent3 from '../../components/RIOComponents/RIOComponent3';
import RIOComponent4 from '../../components/RIOComponents/RIOComponent4';
import Footer from '../../components/Footer/Footer';
import ServicesFlexBox from '../../components/ServicesFlexBox/ServicesFlexBox';
import ClientFeedbackSec from '../../components/ClientFeedbackSec/ClientFeedbackSec';
import CourseFlexBox from '../../components/CourseFlexBox/CourseFlexBox';
import Ringrotationone from '../../components/ringrotationone/ringrotationone';
import { useLocation } from 'react-router-dom';
import SliderForTouchscreen from '../../components/SliderForTouchscreen/SliderForTouchscreen';
import ServiceCourseLinkButton from '../../components/ServiceCourseLinkButton/ServiceCourseLinkButton';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


function Home() {
  const isTouchDevice = "ontouchstart" in window;
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <ScrollToTop />
      <ParallaxProvider>
        <div className='bg-[#242424] font-[Sora] text-white relative'>
          <div className='w-full lg:w-10/12 mx-auto py-7 bg-[url("../images/graph.png")]'>
            <section className='flex flex-col md:portrait:flex-col lg:flex-row justify-start md:portrait:justify-center lg:justify-between min-h-[84vh]'>
              <div className='hidden md:portrait:hidden lg:basis-1/4 lg:flex lg:flex-col lg:justify-between'>
                <div>
                  <img src={SVG1} alt="svg" className='w-full scale-[0.6] rotate-[4deg] translate-y-[2vh] translate-x-[-4vw]' />
                </div>
                <div>
                  <div className={`basis-1/2 aspect-[3/4] bg-transparent bg-left-top bg-no-repeat ${HOME.firstImg}`}></div>
                </div>
              </div>
              <div className='self-center basis-1/2 relative pb-5 lg:pb-0'>
                <div className='absolute scale-50 top-0 lg:top-[-14%] left-1/2 ml-[-50px]'>
                  <svg className={HOME.movingStar} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_1">
                      <line transform="rotate(30 50 50)" style={{ "--transform": "30deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                      <line transform="rotate(60 50 50)" style={{ "--transform": "60deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                      <line transform="rotate(90 50 50)" style={{ "--transform": "90deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                      <line transform="rotate(120 50 50)" style={{ "--transform": "120deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                      <line transform="rotate(150 50 50)" style={{ "--transform": "150deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                      <line style={{ "--transform": "180deg" }} stroke-width="2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="50" x2="100" y1="50" x1="0" stroke="#ffffff" fill="none" />
                    </g>
                  </svg>
                </div>
                <div className='w-3/4 lg:w-full mx-auto pt-20 lg:portrait:mb-10'>
                  <div className='text-center text-xl lg:text-2xl font-light my-6'>Digital agency studio</div>
                  <div className='text-center text-4xl sm:text-5xl lg:text-6xl font-semibold capitalize'>a creative digital agency</div>
                </div>
              </div>
              <div className='lg:basis-1/4 flex flex-col justify-around'>
                <div className={`hidden lg:block lg:aspect-[4/3] lg:bg-transparent lg:bg-center lg:bg-contain lg:bg-no-repeat ${HOME.secondImg}`}></div>
                <div className={`lg:hidden aspect-[4/3] w-3/4 mx-auto bg-transparent bg-center bg-contain bg-no-repeat ${HOME.secondImg_MAX1024}`}></div>

                <div className='h-full flex flex-col justify-center items-center portrait:mt-5 landscape:mt-5 lg:landscape:mt-0'>
                  <div className='portrait:mt-10 portrait:w-1/4 landscape:w-1/4 lg:landscape:w-1/2 aspect-square mx-auto relative'>
                    <div className='w-full h-full flex justify-center items-center absolute z-[3] rotateAnimation'>
                      <div className="w-full aspect-square bg-[url('../ring2.png')] bg-center bg-contain bg-no-repeat bg-transparent"></div>
                    </div>
                    <div className='w-full h-full flex justify-center items-center absolute z-[3]'>
                      <div className='w-fit h-fit portrait:text-[6vw] lg:portrait:text-[3vw] landscape:text-[10vh] lg:landscape:text-[4vh]'>A+</div>
                    </div>
                  </div>
                  <div className='mt-8 text-center portrait:text-[4vmin] landscape:text-[4vmin] lg:landscape:text-[2vmin]'>
                    <div>500k Customers</div>
                    <div>Avg rating 4.8 makes us world best.</div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <section className={`${HOME.sectionSlideList} w-full`}>
            <div className={HOME.sectionSlideListBox}>
              <div className={HOME.sectionSlideMenuBox}>
                <div className={HOME.sectionSlideMenu}>
                  <Marquee autoFill pauseOnHover speed="40">
                    <span className={HOME.slideMenu}>HTML</span>
                    <span className={HOME.slideMenu}>CSS</span>
                    <span className={HOME.slideMenu}>JAVASCRIPT</span>
                    <span className={HOME.slideMenu}>REACT</span>
                    <span className={HOME.slideMenu}>NODE</span>
                  </Marquee>
                </div>
              </div>
            </div>
          </section>

          <div className='w-full lg:w-10/12 mx-auto py-7'>
            <section>
              <div className='flex flex-col lg:flex-row justify-center lg:items-center lg:p-12'>
                <div className='lg:basis-1/3 aspect-square relative overflow-hidden scale-75 lg:scale-100'>
                  <Ringrotationone />
                  <div className='absolute z-[4] w-full h-full overflow-hidden rounded-r-full pl-[50%]'>
                    <div className={`${HOME.forthImg} h-full bg-no-repeat bg-cover`}></div>
                  </div>
                </div>
                <div className='p-10 pt-0 lg:basis-2/3 lg:pl-14'>
                  <div className='text-justify text-xs md:text-[2vmin] min-w-[260px] my-3 p-2 w-1/3 md:w-1/4 lg:p-0 lg:w-[16vw] flex justify-between items-center rounded-3xl border-2 border-solid border-[rgb(128,128,128)] uppercase'><BsDot className='text-[#DAA520] text-xl lg:text-[3vmax]' />About Agency<BsDot className='text-[#DAA520] text-xl lg:text-[3vmax]' /></div>
                  <div className='text-4xl font-black my-7'>We're sharp brands creators open for any new collabs</div>
                  <div className='text-xl font-medium'>Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.</div>
                  <div className='w-full flex justify-start items-center'><ServiceCourseLinkButton link="/about" /></div>
                </div>
              </div>

              <CourseFlexBox />
            </section>
          </div>

          {/* This is section 4 */}
          <ParallaxBanner
            layers={[{ image: `${PARAIMG}`, speed: 20 }]}
            className="hidden lg:block aspect-[26/9] opacity-30"
          />
          <ParallaxBanner
            layers={[{ image: `${PARAIMG}`, speed: 10 }]}
            className="hidden md:block lg:hidden aspect-[23/9] opacity-30"
          />
          <ParallaxBanner
            layers={[{ image: `${PARAIMG}`, speed: 4 }]}
            className="md:hidden aspect-[7/3] opacity-30"
          />

          <section>
            <ServicesFlexBox />
          </section>

          <FeaturedWorks head1="Selected Projects" head2="Featured Works" head3="We're a design first, digital agency focused on delivering custom solutions that function flawlessly." />

          <div className='text-white bg-transparent w-11/12 lg:w-10/12 mx-auto py-7'>
            <section className='flex flex-col md:flex-row items-center flex-wrap min-h-[84vh]'>
              <RIOComponent1 />
              <RIOComponent2 />
              <RIOComponent3 />
              <RIOComponent4 />
            </section>
          </div>

          <FeaturedWorks head1="Testimonial" head2="What Our Clients Are Saying?" />
          <ClientFeedbackSec />

          <div className='w-full h-[14vh]'></div>
          {isTouchDevice ? (<><SliderForTouchscreen /></>) : (<><HomeHorizontalsSec /></>)}

          <Parallax speed={-6} className='hidden lg:block relative z-[4] bg-black'>
            <Section9th />
          </Parallax>

          <Parallax speed={10} className='hidden md:block lg:hidden relative z-[4] bg-black'>
            <Section9th />
          </Parallax>

          <Parallax speed={5} className='md:hidden relative z-[4] bg-black'>
            <Section9th />
          </Parallax>

          <Parallax speed={2} className='relative z-[3] overflow-hidden hidden xl:block xl:landscape:mt-32 xl:portrait:mt-[10vh]'>
            <Footer />
          </Parallax>

          <div className='block xl:hidden'>
            <Footer />
          </div>
        </div>
      </ParallaxProvider>
    </>
  )
}

export default Home