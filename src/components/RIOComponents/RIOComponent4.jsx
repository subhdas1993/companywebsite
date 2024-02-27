import React from 'react'
import RIOCSS from '../RIOComponents/RIOComponents.module.css'

import { useInView } from 'react-intersection-observer';

function RIOComponent4() {
    const { ref, inView } = useInView({
    //   rootMargin: "500px",
      threshold: 0.5,
      triggerOnce: true
    });
    return (
        <>
            <div ref={ref} className='w-full md:basis-1/2 md:p-20 flex flex-col'>
                <div className='w-full aspect-[3/4] relative overflow-hidden'>
                    <div className={`${RIOCSS.listOfImgBox} ${RIOCSS.listOfImg4} ${inView ? `${RIOCSS.listOfImgBoxDisableBlur}` : ""}`}></div>
                    <div className={`${RIOCSS.hiddenBox} ${inView ? `${RIOCSS.hiddenBoxDisable}` : ""}`}></div>
                    {/* ${RIOCSS.hbdTDelay2} */}
                </div>
                <div><span className='float-left'>From our gallery</span><span className='float-right'>© 2023</span></div>
                <div>Branding</div>
            </div>
        </>
    )
}

export default RIOComponent4