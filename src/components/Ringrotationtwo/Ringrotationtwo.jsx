import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
// useLayoutEffect 
function Ringrotationtwo() {
  const ref2 = useRef(null);

  const [width2, setWidth2] = useState(0);
  const [height2, setHeight2] = useState(0);

  console.log(`${width2} and ${height2}`)
  const cxValue = width2 / 2;
  const cyValue = height2 / 2;

  useLayoutEffect(() => {
    setWidth2(ref2.current.clientWidth);
    setHeight2(ref2.current.clientHeight);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      // setWindowSize([window.innerWidth2, window.innerHeight2]);
      setWidth2(ref2.current.clientWidth);
      setHeight2(ref2.current.clientHeight);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    }, [width2,height2]);
  return (
    <>
      <div ref={ref2} className='absolute w-full h-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width={width2} height={height2} className='rotateAnimation border'>
          <path id="circlePath1" d={`M0,${cyValue} A${width2/2},${height2/2} 0 0 1 ${cxValue},${cyValue}`} fill="none" />
          <text font-size={cxValue*0.05} fill="white">
            <textPath href="#circlePath1" startOffset="0">
              Eagle Tech Media Pvt. Ltd. Eagle Tech Media Pvt. Ltd. Eagle Tech Media Pvt. Ltd.
            </textPath>
          </text>
          <path id="circlePath2" d={`M${cxValue},${cyValue} A${width2/2},${height2/2} 0 0 1 0,${cyValue}`} fill="none" />
          <text font-size={cxValue*0.05} fill="white">
            <textPath href="#circlePath2" startOffset="0">
              Eagle Tech Media Pvt. Ltd. Eagle Tech Media Pvt. Ltd. Eagle Tech Media Pvt. Ltd.
            </textPath>
          </text>
        </svg>
      </div>
    </>
  )
}

export default Ringrotationtwo