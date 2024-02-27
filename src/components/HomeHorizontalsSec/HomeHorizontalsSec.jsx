import React, { useEffect } from 'react';
import HSCROLL from '../HomeHorizontalsSec/HomeHorizontalsSec.module.css'
import { BsDot, BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import PageHead from '../PageHead/PageHead';

function HomeHorizontalsSec() {
  useEffect(() => {
    function setStickyContainersSize() {
      const containers = document.querySelectorAll('.sticky-container');
      containers.forEach((container) => {
        const stickyContainerHeight = container.querySelector('main').scrollWidth;
        container.setAttribute('style', `height: ${stickyContainerHeight}px`);
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt) {
      const containers = Array.from(document.querySelectorAll('.sticky-container'));
      const containerInViewPort = containers.find((container) => isElementInViewport(container));

      if (!containerInViewPort) {
        return;
      }

      const isPlaceholderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      const isPlaceholderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      const canScrollHorizontally = isPlaceholderBelowTop && isPlaceholderBelowBottom;

      if (canScrollHorizontally) {
        containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
      }
    }

    setStickyContainersSize();
    window.addEventListener('wheel', wheelHandler);

    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <div className="sticky-container font-[Sora]">
      <main className={HSCROLL.stickyContainerMain}>

        <section className='min-w-full min-h-[100vh]'>
          <div className="lg:portrait:h-fit lg:landscape:h-[25vh] flex flex-col lg:portrait:flex-col lg:landscape:flex-row justify-center landscape:mt-[7vw] portrait:mt-[14vw]">
            <div className="portrait:w-full lg:portrait:w-full lg:landscape:w-1/2">
              <PageHead heading="Awards" />
            </div>
            <div className="lg:portrait:h-fit lg:landscape:h-[25vh] lg:p-0 p-4 w-full lg:portrait:w-full lg:w-1/2">
              <p className="p-1 lg:pl-[2rem] lg:py-6 lg:text-[3vmin]">
                Our area of practice is quite wide: design, development. The experts who work at our web design studio know exactly how to make your project unique, fresh, and profitable.
              </p>
            </div>
          </div>

          <div className='portrait:hidden landscape:h-[6vw]'></div>

          <div className='flex portrait:flex-col landscape:flex-row lg:landscape:justify-between portrait:flex-wrap landscape:flex-wrap lg:landscape:flex-nowrap items-center landscape:py-5 portrait:py-0'>
            <div className="landscape:border-none portrait:border-t border-zinc-700 text-center landscape:w-1/2 lg:landscape:w-fit">

              <h1 className="portrait:text-[13vmin] landscape:text-[14vmin] font-semibold">7</h1>
              <p className="portrait:text-[4vmin] landscape:text-[4vmin] font-medium">
                Years of Experience
              </p>
            </div>

            <div className="landscape:border-none portrait:border-t border-zinc-700 text-center landscape:w-1/2 lg:landscape:w-fit">
              <h1 className="portrait:text-[13vmin] landscape:text-[14vmin] font-semibold">286</h1>
              <p className="portrait:text-[4vmin] landscape:text-[4vmin] font-medium">
                Projects Completed
              </p>
            </div>

            <div className="landscape:border-none portrait:border-t border-zinc-700 text-center landscape:w-1/2 lg:landscape:w-fit">
              <h1 className="portrait:text-[13vmin] landscape:text-[14vmin] font-semibold">2K</h1>
              <p className="portrait:text-[4vmin] landscape:text-[4vmin] font-medium">
                Happy Customers
              </p>
            </div>

            <div className="landscape:border-none portrait:border-t border-zinc-700 text-center landscape:w-1/2 lg:landscape:w-fit">
              <h1 className="portrait:text-[13vmin] landscape:text-[14vmin] font-semibold">11</h1>
              <p className="portrait:text-[4vmin] landscape:text-[4vmin] font-medium">
                Awards Winning
              </p>
            </div>
          </div>
        </section>

        <section class='min-w-full min-h-[100vh] flex justify-center portrait:px-4 landscape:px-3 landscape:items-center'>
          <div class="flex portrait:flex-col landscape:flex-row portrait:h-screen landscape:h-[90vh] justify-around">
            <div class="flex flex-col justify-center items-start">
              <div
                class="portrait:hidden md:portrait:flex landscape:flex justify-between items-center w-2/5 p-[2vmin] border rounded-full tracking-widest font-medium uppercase">
                <BsDot className="text-[2vmax] text-orange-400" />
                  <span className='text-[2vmin]'>Acheivements</span>
                  <BsDot className="text-[2vmax] text-orange-400" />
              </div>

              <div class="mt-5 portrait:text-[8vmin] landscape:text-[5vmin] font-bold leading-tight tracking-wide">
                OUR AWARDS
              </div>
              <div class="portrait:w-full w-5/6 portrait:text-[5vmin] landscape:text-[2.6vmin] leading-snug tracking-normal mt-5 text-justify">
                We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly.
              </div>

              <div
                class="flex items-center justify-center portrait:w-full md:portrait:w-2/3 landscape:w-2/3 bg-neutral-900 border-t border-zinc-700 portrait:py-2 py-8 portrait:mt-4 mt-[5rem] portrait:mx-auto landscape:self-center">
                <h1 class="portrait:text-[14vmin] landscape:text-[12vmin] text-center">7</h1>
                <h1 class="font-light portrait:text-[3vmin] landscape:text-[3vmin] px-3 w-fit">
                  YEARS OF <br />EXPERIENCE
                </h1>
              </div>
            </div>

            <div class="portrait:h-fit landscape:h-full w-full flex flex-col justify-between">
              <div className="portrait:h-fit landscape:h-full flex flex-row items-center border-b border-zinc-600 hover:border-white portrait:my-4">
                <div className="w-full leading-[3rem]">
                  <h1 class="text-[5vmin] font-semibold">
                    Best SEO/SEM Campaign
                  </h1>
                  <span class="border rounded-full border-zinc-600 text-gray-400 px-3 py-1 text-[2vmin]">2022</span>
                  <span class="text-gray-500 text-[3vmin] pl-3">Awards</span>
                </div>
                <div className="pb-5"><BsFillArrowUpRightSquareFill className="text-3xl cursor-pointer" /></div>
              </div>

              <div className="portrait:h-fit landscape:h-full flex flex-row items-center border-b border-zinc-600 hover:border-white portrait:my-4">
                <div className="w-full leading-[3rem]">
                  <h1 class="text-[5vmin] font-semibold">
                    Best Innovation in Digital
                  </h1>
                  <span class="border rounded-full border-zinc-600 text-gray-400 px-3 py-1 text-[2vmin]">2020</span>
                  <span class="text-gray-500 text-[3vmin] pl-3">Awards</span>
                </div>
                <div className="pb-5"><BsFillArrowUpRightSquareFill className="text-3xl cursor-pointer" /></div>
              </div>

              <div className="portrait:h-fit landscape:h-full flex flex-row items-center border-b border-zinc-600 hover:border-white portrait:my-4">
                <div className="w-full leading-[3rem]">
                  <h1 class="text-[5vmin] font-semibold">
                    Social Media Marketing
                  </h1>
                  <span class="border rounded-full border-zinc-600 text-gray-400 px-3 py-1 text-[2vmin]">2022</span>
                  <span class="text-gray-500 text-[3vmin] pl-3">Awards</span>
                </div>
                <div className="pb-5"><BsFillArrowUpRightSquareFill className="text-3xl cursor-pointer" /></div>
              </div>

              <div className="portrait:h-fit landscape:h-full flex flex-row items-center border-b border-zinc-600 hover:border-white portrait:my-4">
                <div className="w-full leading-[3rem]">
                  <h1 class="text-[5vmin] font-semibold">
                    UI/UX Website
                  </h1>
                  <span class="border rounded-full border-zinc-600 text-gray-400 px-3 py-1 text-[2vmin]">2021</span>
                  <span class="text-gray-500 text-[3vmin] pl-3">Awards</span>
                </div>
                <div className="pb-5"><BsFillArrowUpRightSquareFill className="text-3xl cursor-pointer" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className='min-w-full min-h-[100vh]'>
          <section className="bg-[url('../images/graph.png')] h-screen w-full p-10">
            <div className="flex flex-col justify-center lg:justify-between items-center h-full">
              <div className="flex items-center border rounded-full tracking-widest font-medium lg:px-2 py-2 lg:mt-[4rem] uppercase">
                <BsDot className="text-[2vmax] text-orange-400" />
                <span className='text-[2vmin]'>call to action</span>
                <BsDot className="text-[2vmax] text-orange-400" />
              </div>

              <div className="portrait:w-full landscape:w-3/5 mt-5 lg:text-7xl text-[4vmin] font-bold leading-tight text-center">
                Have a project in mind? Let’s get to work.
              </div>
              <div className='w-full lg:w-3/5 flex justify-center items-center'>
                <ReadMoreButton link="/contact" />
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default HomeHorizontalsSec