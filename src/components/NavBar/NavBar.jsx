import React, { useState } from 'react'
import NAV from '../NavBar/NavBar.module.css'
import { BiCaretRight } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function NavBar({ pos }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen);

  isOpen?document.body.style.overflow="hidden" : document.body.style.overflow="auto";
  
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className='bg-transparent font-[Sora] uppercase text-[1vmax] font-semibold border-b-2 border-solid border-[rgb(128,128,128)] relative'>
      <div className='portrait:w-full lg:portrait:w-11/12 landscape:w-11/12 lg:landscape:w-10/12 mx-auto relative sm:static'>
        <div className='flex justify-between text-white'>
          <div className='mx-2 lg:mx-0 basis-28 self-center aspect-[16/9] bg-transparent bg-center bg-contain bg-[url("../Eagle-Tech-Media-logo2.png")] bg-no-repeat lg:origin-left lg:scale-150' onClick={() => handleClick('/')}></div>
          <div className='hidden sm:block basis-1/2 text-xs'>
            <nav className='flex justify-between'>
              <div className='pr-2 md:pr-4 py-6' onClick={() => handleClick('/')}>Home</div>
              <div className='px-2 md:px-4 py-6' onClick={() => handleClick('/about')}>About</div>
              <div className='px-2 md:px-4'>
                {
                  pos === "static" &&
                  <>
                    <div className={`${NAV.navsubmenu1} py-6`}>
                      <div className='flex justify-start items-center'>
                        <div onClick={() => handleClick('/services')}>Services</div><div><BiCaretRight className={NAV.arrowrotate} /></div>
                      </div>
                      <div className={`${NAV.navsubmenu2} py-1 md:py-2`}>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/seo')}>SEO</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/social_media_marketing')}>Social Media Marketing</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/web_development')}>Web Development</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/logo_design')}>Logo Design</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/product_packaging')}>Product Packaging</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/lead_generation')}>Lead Generation</div>
                      </div>
                    </div>
                  </>
                }
                {
                  pos === "fixed" &&
                  <>
                    <div className={`${NAV.navfixedsubmenu1} py-6`}>
                      <div className='flex justify-start items-center'>
                        <div onClick={() => handleClick('/services')}>Services</div><div><BiCaretRight className={NAV.arrowrotate} /></div>
                      </div>
                      <div className={`${NAV.navfixedsubmenu2} py-1 md:py-2`}>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/seo')}>SEO</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/social_media_marketing')}>Social Media Marketing</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/web_development')}>Web Development</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/logo_design')}>Logo Design</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/product_packaging')}>Product Packaging</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/services/lead_generation')}>Lead Generation</div>
                      </div>
                    </div>
                  </>
                }

              </div>
              <div className='px-2 md:px-4'>
                {
                  pos === "static" &&
                  <>
                    <div className={`${NAV.navsubmenu1} py-6`}>
                      <div className='flex justify-start items-center'>
                        <div onClick={() => handleClick('/courses')}>Courses</div><div><BiCaretRight className={NAV.arrowrotate} /></div>
                      </div>
                      <div className={`${NAV.navsubmenu2} py-1 md:py-2`}>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/digital_marketing')}>Digital Marketing</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/web_design')}>Web Design</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/full_stack_web_development')}>Full Stack Web Development</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/graphic_design')}>Graphic Design</div>
                        {/* <div className='px-2 py-1 md:px-4 md:py-2'><a href="http://www.eagletechmedia.com/course/" target="_blank" style={{cursor:'none'}}>3-in-1 Master Course</a></div> */}
                      </div>
                    </div>
                  </>
                }
                {
                  pos === "fixed" &&
                  <>
                    <div className={`${NAV.navfixedsubmenu1} py-6`}>
                      <div className='flex justify-start items-center'>
                        <div onClick={() => handleClick('/courses')}>Courses</div><div><BiCaretRight className={NAV.arrowrotate} /></div>
                      </div>
                      <div className={`${NAV.navfixedsubmenu2} py-1 md:py-2`}>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/digital_marketing')}>Digital Marketing</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/web_design')}>Web Design</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/full_stack_web_development')}>Full Stack Web Development</div>
                        <div className='px-2 py-1 md:px-4 md:py-2' onClick={() => handleClick('/courses/graphic_design')}>Graphic Design</div>
                        {/* <div className='px-2 py-1 md:px-4 md:py-2'><a className="cursor-none" href="http://www.eagletechmedia.com/course/" target="_blank">3-in-1 Master Course</a></div> */}
                      </div>
                    </div>
                  </>
                }
              </div>
              {/* <div className='px-2 md:px-4 py-6'><a className="cursor-none" href="http://www.eagletechmedia.com/blog/index.php" target="_blank">Blog</a></div> */}
              <div className='pl-2 md:pl-4 py-6' onClick={() => handleClick('/contact')}>Contact</div>
            </nav>
          </div>
          <div className='mx-2 sm:hidden self-center text-4xl' onClick={toggleDrawer}>
            {isOpen ? (<><AiOutlineClose /></>) : (<><HiOutlineMenu /></>)}
          </div>
        </div>
        <div className={`${isOpen ? `${NAV.menuEffect} right-0` : `${NAV.menuEffect} right-[100%]`} sm:hidden w-screen h-[86vh] absolute z-[4] bg-[#242424] py-4 text-xl`}>
          <div className={`${NAV.textStroke} h-full flex flex-col justify-between px-3`}>
            <div onClick={() => { handleClick('/'); toggleDrawer(); }}>home</div>
            <div onClick={() => { handleClick('/about'); toggleDrawer(); }}>about</div>
            <div><span onClick={() => { handleClick('/services'); toggleDrawer(); }}>service</span>
              <ul className='text-sm py-1 px-4'>
                <li onClick={() => { handleClick('/services/seo'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />SEO</li>
                <li onClick={() => { handleClick('/services/social_media_marketing'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Social Media Marketing</li>
                <li onClick={() => { handleClick('/services/web_development'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Web Development</li>
                <li onClick={() => { handleClick('/services/logo_design'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Logo Design</li>
                <li onClick={() => { handleClick('/services/product_packaging'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Product Packaging</li>
                <li onClick={() => { handleClick('/services/lead_generation'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Lead Generation</li>
              </ul>
            </div>
            <div><span onClick={() => { handleClick('/courses'); toggleDrawer(); }}>Courses</span>
              <ul className='text-sm py-1 px-4'>
                <li onClick={() => { handleClick('/courses/digital_marketing'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Digital Marketing</li>
                <li onClick={() => { handleClick('/courses/web_design'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Web Design</li>
                <li onClick={() => { handleClick('/courses/full_stack_web_development'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Full Stack Web Development</li>
                <li onClick={() => { handleClick('/courses/graphic_design'); toggleDrawer(); }}><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />Graphic Design</li>
                {/* <li><a className="cursor-none" href="http://www.eagletechmedia.com/course/" target="_blank"><HiOutlineArrowNarrowRight className='inline-block mr-3 text-white' />3-in-1 Master Course</a></li> */}
              </ul>
            </div>
            {/* <div><a className="cursor-none" href="http://www.eagletechmedia.com/blog/index.php" target="_blank">blog</a></div> */}
            <div onClick={() => { handleClick('/contact'); toggleDrawer(); }}>contact</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar