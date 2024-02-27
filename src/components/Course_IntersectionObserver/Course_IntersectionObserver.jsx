import React, { useRef } from 'react'
import { useInView } from "react-intersection-observer";
import { BsArrow90DegDown } from "react-icons/bs";
import ReadMoreButton2 from '../ReadMoreButton2/ReadMoreButton2';

function Course_IntersectionObserver() {
  const imageRef = useRef(null);
  const { ref: firstContainer, inView: firstInView } = useInView({
    threshold: 0.5
  });

  const { ref: secondContainer, inView: secondInView } = useInView({
    threshold: 0.5
  });

  const { ref: thirdContainer, inView: thirdInView } = useInView({
    threshold: 0.5
  });

  const { ref: forthContainer, inView: forthInView } = useInView({
    threshold: 0.5
  });

  const { ref: fifthContainer, inView: fifthInView } = useInView({
    threshold: 0.5
  });

  const getImage = () => {
    if (firstInView)
      return "../imageforIntOb/img7.jpg";
    if (secondInView)
      return "../imageforIntOb/img8.jpg";
    if (thirdInView)
      return "../imageforIntOb/img9.jpg";
    if (forthInView)
      return "../imageforIntOb/img11.png";
    if (fifthInView)
      return "../imageforIntOb/img10.jpg";
  };


  return (
    <>
      <div className="wrapper font-[Sora] relative">

        <div className='portrait:block landscape:hidden px-10'>
          <div style={{ backgroundImage: 'url("../imageforIntOb/img7.jpg")' }} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
            <div className='w-full'>
              <div className='uppercase text-2xl mb-5'>01. digital marketing</div>
              <div className='capitalize text-5xl mb-5'>A GLOBAL STANDARD</div>
              <div className='pl-2 text-lg'>
                <div className='mb-2'>Our Digital Marketing course provides an in-depth understanding of Digital Marketing platforms to help plan an effective Digital Marketing strategy..</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Get Professional Excellence</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Assignments + Live-projects</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />100% Placement Assistance</div>
              </div>
              <ReadMoreButton2 link="/courses/digital_marketing" />
            </div>
          </div>

          <div style={{ backgroundImage: 'url("../imageforIntOb/img8.jpeg")' }} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
            <div className='w-full'>
              <div className='uppercase text-2xl mb-5'>02. web design</div>
              <div className='capitalize text-5xl mb-5'>WINGS TO YOUR CAREER</div>
              <div className='pl-2 text-lg'>
                <div className='mb-2'>A Web Designer develop the design, layout, and graphics of a website & often coordinate with a web developer for coding of a website.</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Free Career Counselling</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Offline & Online Classes</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Develop Their Skillset In Programming</div>
              </div>
              <ReadMoreButton2 link="/courses/web_design" />
            </div>
          </div>

          <div style={{ backgroundImage: 'url("../imageforIntOb/img9.jpg")' }} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
            <div className='w-full'>
              <div className='uppercase text-2xl mb-5'>03. full stack web development</div>
              <div className='capitalize text-5xl mb-5'>JOIN THE TECH FORCE</div>
              <div className='pl-2 text-lg'>
                <div className='mb-2'>Our FUll Stack website Developer course will help you gain expertise in the latest front-end and back-end technologies of Applicaton Development.</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Real-life Projects</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />24*7 career support</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Guranteed job opportunities</div>
              </div>
              <ReadMoreButton2 link="/courses/full_stack_web_development" />
            </div>
          </div>

          <div style={{ backgroundImage: 'url("../imageforIntOb/img11.png")' }} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
            <div className='w-full'>
              <div className='uppercase text-2xl mb-5'>04. graphic designing</div>
              <div className='capitalize text-5xl mb-5'>LET US NOURISH YOUR CREATIVITY</div>
              <div className='pl-2 text-lg'>
                <div className='mb-2'>Student interested to learn graphic software’s can join our institute to learn basic to advance concepts of graphic software's.</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />100% Job Assistance</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Free Career Counselling</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Course Is Designed By Expert Trainers</div>
              </div>
              <ReadMoreButton2 link="/courses/graphic_design" />
            </div>
          </div>

          {/* <div style={{ backgroundImage: 'url("../imageforIntOb/img10.jpg")' }} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
            <div className='w-full'>
              <div className='uppercase text-2xl mb-5'>05. 3-in-1 master course</div>
              <div className='capitalize text-5xl mb-5'>master course</div>
              <div className='pl-2 text-lg'>
                <div className='mb-2'>you will learn the skills of Digital marketing(40+ modules), Web design ,and Graphic design in a full manner.</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />40+ Modules</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />1 On 1 Mentoring Sessions</div>
                <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Resume & Interview Preparation</div>
              </div>
              <ReadMoreButton2 link="3in1" />
            </div>
          </div> */}
        </div>

        <div className='landscape:block portrait:hidden'>
          <div className="image-wrapper">
            <div ref={imageRef} style={{ backgroundImage: `url(${getImage()})` }} className={`sticky top-0 landscape:h-[110vh] aspect-[9/16] xl:aspect-[9/11] bg-cover bg-no-repeat`}></div>
          </div>
          <div className="first" ref={firstContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-0 lg:pl-[45%] xl:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>01. digital marketing</div>
                <div className='capitalize text-[6vmin] mb-5'>A GLOBAL STANDARD</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>Our Digital Marketing course provides an in-depth understanding of Digital Marketing platforms to help plan an effective Digital Marketing strategy.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Get Professional Excellence</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Assignments + Live-projects</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />100% Placement Assistance</div>
                </div>
                <ReadMoreButton2 link="/courses/digital_marketing" />
              </div>
            </div>
          </div>
          <div className="first" ref={secondContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-0 lg:pl-[45%] xl:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>02. web design</div>
                <div className='capitalize text-[6vmin] mb-5'>WINGS TO YOUR CAREER</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>A Web Designer develop the design, layout, and graphics of a website & often coordinate with a web developer for coding of a website.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Free Career Counselling</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Offline & Online Classes</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Develop Their Skillset In Programming</div>
                </div>
                <ReadMoreButton2 link="/courses/web_design" />
              </div>
            </div>
          </div>
          <div className="first" ref={thirdContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-0 lg:pl-[45%] xl:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>03. full stack web development</div>
                <div className='capitalize text-[6vmin] mb-5'>JOIN THE TECH FORCE</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>Our FUll Stack website Developer course will help you gain expertise in the latest front-end and back-end technologies of Applicaton Development.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Real-life Projects</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />24*7 career support</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Guranteed job opportunities</div>
                </div>
                <ReadMoreButton2 link="/courses/full_stack_web_development" />
              </div>
            </div>
          </div>

          <div className="first" ref={forthContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-0 lg:pl-[45%] xl:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>04. graphic designing</div>
                <div className='capitalize text-[6vmin] mb-5'>LET US NOURISH YOUR CREATIVITY</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>Student interested to learn graphic software’s can join our institute to learn basic to advance concepts of graphic software's.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />100% Job Assistance</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Free Career Counselling</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Course Is Designed By Expert Trainers</div>
                </div>
                <ReadMoreButton2 link="/courses/graphic_design" />
              </div>
            </div>
          </div>
          {/* <div className="first" ref={fifthContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-0 lg:pl-[45%] xl:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>05. 3-in-1 master course</div>
                <div className='capitalize text-[6vmin] mb-5'>master course</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>you will learn the skills of Digital marketing(40+ modules), Web design ,and Graphic design in a full manner.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />40+ Modules</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />1 On 1 Mentoring Sessions</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Resume & Interview Preparation</div>
                </div>
                <ReadMoreButton2 link="3in1" />
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </>
  )
}

export default Course_IntersectionObserver