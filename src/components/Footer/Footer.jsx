import React,{useRef} from 'react'
import { AiFillMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin, BsTelephoneForwardFill, BsYoutube } from "react-icons/bs";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();
  const form_nlmail = useRef(null);

  // const sendNLEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_t4bfuv5', 'template_j8ihi2i', form.current, 'ly4UFBI4EKCdIVUsX')
  //     .then((result) => {
  //       console.log(result.text);
  //       alert("Message Sent")
  //     }, (error) => {
  //       console.log(error.text);
  //       alert("Something's Wrong. Try Again Later.")
  //     });

  //   e.target.reset();
  // };
  return (
    <>
      <footer className='flex flex-col justify-center items-center'>
        <div className='w-full border-zinc-700 lg:landscape:h-[40vh] lg:portrait:h-[50vh] border-b-2 px-2 lg:px-0 pb-10 lg:pb-0'>
          <div className='portrait:w-full lg:portrait:w-11/12 landscape:w-11/12 lg:landscape:w-10/12 mx-auto h-full flex flex-col lg:flex-row portrait:flex-col md:portrait:flex-row portrait:flex-wrap landscape:flex-row landscape:flex-nowrap justify-between landscape:items-start portrait:items-center px-3 lg:px-0 lg:landscape:pt-10'>
            <div className='portrait:w-full md:portrait:w-[40%] landscape:w-[20%] landscape:my-3 portrait:my-2'>
              <div>
                <h1 className="portrait:text-[4vmin] landscape:text-[3vmin] font-black mb-1 lg:mb-0">Address</h1>
              </div>
              <div className="portrait:text-[3vmin] landscape:text-[2vmin] font-semibold pt-2 lg:pt-4 lg:portrait:pt-0">
                {/* <p className='flex'> A-43 Second, Opposite TDI Mall, Rajouri Garden, New Delhi, Delhi-110027, India</p> */}
                <p className='flex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt!</p>
              </div>
            </div>
            <div className='portrait:w-full md:portrait:w-[50%] landscape:w-[30%] landscape:my-3 portrait:my-2'>
              <div>
                <h1 className="portrait:text-[4vmin] landscape:text-[3vmin] font-black mb-1 lg:mb-0">Say Hello</h1>
              </div>
              <div className="portrait:text-[3vmin] landscape:text-[2vmin] font-semibold pt-2 lg:pt-4 lg:portrait:pt-0 break-all">
                {/* <a href="mailto:eagletechmedia.rajouri@gmail.com" className='flex items-center cursor-none'> <AiFillMail className='mr-3' /> eagletechmedia.rajouri@gmail.com</a> */}
                <a href="mailto:subhashis93@yahoo.in" className='flex items-center cursor-none'> <AiFillMail className='mr-3' /> subhashis93@yahoo.in</a>
              </div>
              <div className="portrait:text-[3vmin] landscape:text-[2vmin] font-semibold pt-2 lg:pt-4 lg:portrait:pt-0">
                {/* <a href="tel:+919871661883" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-3' /> +91 9871661883</a> */}
                <a href="tel:+919971836966" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-3' /> +91 9971836966</a>
              </div>
              {/* <div className="portrait:text-[3vmin] landscape:text-[2vmin] font-semibold pt-2 lg:pt-4 lg:portrait:pt-0">
                <a href="tel:+919871661884" className='flex items-center cursor-none'><BsTelephoneForwardFill className='mr-3' /> +91 9871661884</a>
              </div> */}
            </div>
            <div className='portrait:hidden landscape:w-[14%] my-3 mx-0'>
              <div>
                <h1 className="portrait:text-[4vmin] landscape:text-[3vmin] font-black mb-1 lg:mb-0">Social</h1>
              </div>
              <div className='pt-2 lg:pt-4'>
                <h1 className='text-[2vmin] cursor-none'> <a href="https://www.facebook.com/profile.php?id=100092034759593&amp;mibextid=ZbWKwL" className='block w-full' style={{ cursor: "none",pointerEvents:'none' }} target='_blank'> FaceBook </a> </h1>
                <h1 className='text-[2vmin] cursor-none'> <a href="https://www.youtube.com/@_eagletechmedia/featured" className='block w-full' style={{ cursor: "none",pointerEvents:'none' }} target='_blank'> YouTube </a> </h1>
                <h1 className='text-[2vmin] cursor-none'> <a href="https://instagram.com/eagle_tech_learning?igshid=YmMyMTA2M2Y=" className='block w-full' style={{ cursor: "none",pointerEvents:'none' }} target='_blank'> Instagram </a> </h1>
                <h1 className='text-[2vmin] cursor-none'> <a href="https://www.linkedin.com/in/eagle-tech-media-21939a25a/" className='block w-full' style={{ cursor: "none",pointerEvents:'none' }} target='_blank'> LinkedIn </a> </h1>
              </div>
            </div>
            <div className='portrait:block landscape:hidden portrait:w-full md:portrait:w-[30%]'>
              <div>
                <h1 className="portrait:text-[4vmin] landscape:text-[3vmin] font-black mb-1 lg:mb-0">Social</h1>
              </div>
              <div className='w-full flex justify-between items-center pt-2'>
                <div className='text-2xl cursor-none'> <a href="https://www.facebook.com/profile.php?id=100092034759593&amp;mibextid=ZbWKwL" style={{ cursor: "none",pointerEvents:'none' }} target='_blank'><BsFacebook /></a> </div>
                <div className='text-2xl mx-2 lg:portrait:mx-5 cursor-none'> <a href="https://www.youtube.com/@_eagletechmedia/featured" style={{ cursor: "none",pointerEvents:'none' }} target='_blank'><BsYoutube /></a> </div>
                <div className='text-2xl mr-2 lg:mr-0 lg:portrait:mr-5 cursor-none'> <a href="https://instagram.com/eagle_tech_learning?igshid=YmMyMTA2M2Y=" style={{ cursor: "none",pointerEvents:'none' }} target='_blank'><BsInstagram /></a> </div>
                <div className='text-2xl cursor-none'> <a href="https://www.linkedin.com/in/eagle-tech-media-21939a25a/" style={{ cursor: "none",pointerEvents:'none' }} target='_blank'><BsLinkedin /></a> </div>
              </div>
            </div>

            {/* <div className='portrait:w-full md:portrait:w-[50%] landscape:w-[20%] landscape:my-3 portrait:my-2'>
              <div>
                <h1 className="portrait:text-[4vmin] landscape:text-[3vmin] font-black mb-1 lg:mb-0">Newsletter</h1>
              </div>
              <div className='w-full'>
                <form ref={form} onSubmit={sendNLEmail}>
                  <div className="pt-0 md:pt-4 bg-transparent flex justify-start items-start border-b">
                    <input type="email" name="nlmail" ref={form_nlmail} placeholder="Type Your Email" className="bg-transparent w-11/12 text-sm outline-0 cursor-none" />
                    <button type="submit" className='w-1/12 cursor-none'> <FaLongArrowAltRight /> </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>

        <div className="portrait:w-full lg:portrait:w-11/12 landscape:w-11/12 lg:landscape:w-10/12 mx-auto flex justify-between items-center">
          <div className='mx-2 basis-28 aspect-[16/9] bg-transparent bg-center bg-contain bg-[url("../Eagle-Tech-Media-logo2.png")] bg-no-repeat'>
          </div>
          <div className="text-sm lg:text-base text-gray-400">
            © 2023 by Subhashis Das
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer