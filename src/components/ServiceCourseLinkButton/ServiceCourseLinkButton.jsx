import React from 'react'
import { useNavigate } from 'react-router-dom';

function ServiceCourseLinkButton({link}) {
  const navigate = useNavigate();
  return (
    <>
      {
        link === '/about' && <button style={{cursor:"none"}} className='portrait:text-[2.4vmin] landscape:text-[2.4vmin] lg:landscape:text-[1.8vmin] block mt-5 uppercase px-[3vmin] py-2 border rounded-3xl buttonstyle outline-0 outline-transparent outline-none' onClick={() => navigate(`${link}`)}>read more</button>
      }
      
      {
        link !== '/about' && <button style={{cursor:"none"}} className='portrait:text-[2.4vmin] landscape:text-[2.4vmin] lg:landscape:text-[1.8vmin] block mx-auto mt-5 uppercase px-[3vmin] py-2 border rounded-3xl buttonstyle outline-0 outline-transparent outline-none' onClick={() => navigate(`${link}`)}>read more</button>
      }
    </>
  )
}

export default ServiceCourseLinkButton