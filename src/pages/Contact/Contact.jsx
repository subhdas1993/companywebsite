import React,{useEffect,useRef} from 'react'
import PageHead from '../../components/PageHead/PageHead'
import { AiFillMail, AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillTelephoneFill, BsTelephoneForwardFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

import IMG from '/images/courses_services/contact.png';
import Footer from '../../components/Footer/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css'

import emailjs from '@emailjs/browser';

function Contact() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])

  const form = useRef();
    const form_name = useRef(null);
    const form_email = useRef(null);
    const form_phone = useRef(null);
    const form_msg = useRef(null);

    // serviceID: service_t4bfuv5
     // templete: template_in6b7aw
      // privatekay: ly4UFBI4EKCdIVUsX
    const sendEmail = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_nn51xri', 'template_0i8lnpe', form.current, 'jHVtTFjGS2hbNVWdg')
          .then((result) => {
              console.log(result.text);
              alert("Message Sent")
          }, (error) => {
              console.log(error.text);
              alert("Something's Wrong. Try Again Later.")
          });

      e.target.reset();
  };
  return (
    <>
      <PageHead heading="Contact" />
      <div className="relative">
      <div className='block h-[7vmax] lg:portrait:hidden'></div>
      <div className='w-full lg:h-[40vh] lg:portrait:h-fit font-[Sora]'>
        <div className='w-full lg:w-10/12 mx-auto h-full flex flex-col lg:flex-row justify-between items-start px-3 lg:px-0'>

          <div className='w-full my-3 lg:mx-0 flex justify-center items-center' data-aos="flip-up">
            <div className='basis-1/12 aspect-square flex justify-center items-center rounded-xl mr-4'>
              <TiLocation className='lg:text-2xl' />
            </div>
            <div className='w-full lg:w-fit'>
              <div>
                <h1 className="text-base md:text-xl font-semibold underline lg:no-underline mb-1 lg:mb-0">Address</h1>
              </div>
              <div className="text-xs md:text-base font-light pt-2 lg:pt-4">
                {/* <p>A-43 Second, Opposite TDI Mall, Rajouri Garden, New Delhi, Delhi-110027, India</p> */}
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt! </p>
              </div>
            </div>
          </div>

          <div className='w-full my-3 lg:mx-0 flex justify-center items-center' data-aos="flip-up">
            <div className='basis-1/12 aspect-square flex justify-center items-center rounded-xl mr-4'>
              <BsFillTelephoneFill className='lg:text-2xl' />
            </div>
            <div className='w-full lg:w-fit'>
              <div>
                <h1 className="text-base md:text-xl font-semibold underline lg:no-underline mb-1 lg:mb-0">Contacts</h1>
              </div>
              <div className="text-xs md:text-base font-light">
                <div className="text-xs md:text-base font-light pt-2">
                  {/* <a href="#" className='flex items-center cursor-none'> <AiFillMail className='mr-2' /> eagletechmedia.rajouri@gmail.com</a> */}
                  <a href="#" className='flex items-center cursor-none'> <AiFillMail className='mr-2' /> subhashis93@yahoo.in</a>
                </div>
                <div className="text-xs md:text-base font-light pt-2">
                  {/* <a href="#" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-2' /> +91 9871661883</a> */}
                  <a href="#" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-2' /> +91 9971836966</a>
                </div>
                {/* <div className="text-xs md:text-base font-light pt-2">
                  <a href="#" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-2' /> +91 9871661884</a>
                </div> */}
              </div>
            </div>
          </div>

          <div className='w-full my-3 lg:mx-0 flex justify-center items-center' data-aos="flip-up">
            <div className='basis-1/12 aspect-square flex justify-center items-center rounded-xl mr-4'>
              <AiOutlineClockCircle className='lg:text-2xl' />
            </div>
            <div className='w-full lg:w-fit'>
              <div>
                <h1 className="text-base md:text-xl font-semibold underline lg:no-underline mb-1 lg:mb-0">Hours of Operation</h1>
              </div>
              <div className="text-xs md:text-base font-light pt-2 lg:pt-4">
                <p>Monday - Saturday: 09:00 AM - 06:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[20vw] lg:h-[4vw]'></div>
      <div className='w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row lg:portrait:flex-col lg:portrait:justify-between justify-around items-center overflow-x-hidden'>
        <div style={{ backgroundImage: `url(${IMG})` }} className='w-3/4 lg:w-5/12 lg:portrait:w-full aspect-square bg-contain bg-center bg-no-repeat overflox-x-hidden' data-aos="fade-down-right"></div>
        <div className='w-full lg:w-5/12 lg:portrait:w-full p-8 overflox-x-hidden' data-aos="fade-down-left">
					<form ref={form} onSubmit={sendEmail} className='grid gap-[2vh]'>
            <div><input type='text' name='name' ref={form_name} required data-error="Please enter your name" className='w-full p-3 text-white bg-transparent outline-transparent border border-zinc-700 rounded cursor-none' placeholder='Your Name'></input></div>
            
            <div><input type="email" name="email" ref={form_email} required data-error="Please enter your email" className='w-full p-3 text-white bg-transparent outline-transparent border border-zinc-700 rounded cursor-none' placeholder='Your Email'></input></div>
            
            <div><input type='text' name='phoneno' ref={form_phone} required data-error="Please enter your phone number" className='w-full p-3 text-white bg-transparent outline-transparent border border-zinc-700 rounded cursor-none' placeholder='Your Phone/Mobile No.'></input></div>
            
            <div><textarea name="msg" ref={form_msg} rows="10" required data-error="Please write your message" className='w-full p-3 text-white bg-transparent outline-transparent border border-zinc-700 rounded cursor-none' placeholder='Write Your Message'></textarea></div>
            
            <div><button type="submit" className='block mx-auto bg-transparent text-white portrait:text-[4vmin] landscape:text-[2.6vmin] px-4 py-2 rounded-full border-2 border-zinc-500 cursor-none'>Send Message</button></div>
          </form>
        </div>
      </div>
      <div className='border-t lg:portrait:pt-10'>
        <Footer />
      </div>
      </div>
    </>
  )
}

export default Contact