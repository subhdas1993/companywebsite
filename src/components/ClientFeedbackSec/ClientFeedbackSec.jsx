import React from 'react'
import { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function ClientFeedbackSec() {
    const options = {
        pagination: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        interval: 7000,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        resetProgress: true,
        // wheel: true,
      }
    
      const splideRef = useRef(null);
      const paginationRef = useRef(null);
    
      function updatePaginationDots() {
        const splideInstance = splideRef.current.splide;
        const paginationDots = paginationRef.current.querySelectorAll('li');
    
        paginationDots.forEach((dot, index) => {
          dot.style.backgroundColor = index === splideInstance.index ? '#fff' : 'transparent';
        });
      }
      useEffect(() => {
        const splideInstance = splideRef.current.splide;
        const paginationDots = paginationRef.current.querySelectorAll('li');
    
        paginationDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            splideInstance.go(index);
          });
        });
      }, []);
    
    
      return (
        <>
          <div className='w-full md:w-3/4 md:mx-auto lg:my-5'>
          <Splide options={options} onMoved={() => updatePaginationDots()} ref={splideRef} aria-labelledby="My Favorite Images">
            <SplideSlide className='block p-10'>
            <p className='text-xl italic'>"We used Eagle tech media to design and build our website and found them to professional knowledge and very customer focused. The end result was impressive and so we commisioned them again to develop an e-commerce solution. We would recommend them without hesitations."</p>
              <h3 className='mt-5 text-base font-semibold'>Raghav Sharma</h3>
            </SplideSlide>
            <SplideSlide className='block p-10'>
              <p className='text-xl italic'>"Eagle tech media &amp; SEO company provided us new business in Dubai , with amazing web design for our company and also search engine optimization. But most importantly they are great people and a pleasure to do business with. I would definitely recommend their services to all existing and new business start-ups."</p>
              <h3 className='mt-5 text-base font-semibold'>Khalid Albdour</h3>
            </SplideSlide>
            <SplideSlide className='block p-10'>
              <p className='text-xl italic'>"These guys have been impressive, good team, vey prompt in responding to queries and respect time. They provide good ideas and they are practical. They provide you insight and suggestions, which you otherwise don't think of my experience has been amazing."</p>
              <h3 className='mt-5 text-base font-semibold'>Sanjay kapoor</h3>
            </SplideSlide>
          </Splide>
          <ul className="custom-pagination" ref={paginationRef}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          </div>
        </>
      )
}

export default ClientFeedbackSec