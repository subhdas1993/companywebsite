import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
// useLayoutEffect 
function Ringrotationone() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  console.log(`${width} and ${height}`)
  const cxValue = width / 2;
  const cyValue = height / 2;

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      // setWindowSize([window.innerWidth, window.innerHeight]);
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    }, [width,height]);
  return (
    <>
      <div ref={ref} className='absolute w-full h-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className='rotateAnimation'>
          <circle cx={cxValue} cy={cyValue} r={cxValue*0.95} fill="rgb(60, 60, 60)" />
          <circle cx={cxValue} cy={cyValue} r={cxValue*(2/3)} fill="#242424" />
          <path id="circlePath1" d={`M${cxValue*0.25},${cyValue} A${cxValue*(2/3)},${cyValue*(2/3)} 0 0 1 ${cxValue*1.75},${cyValue}`} fill="none" />
          <text font-size={cxValue*(2/3)*0.23} fill="white">
            <textPath href="#circlePath1" startOffset="0">
              Eagle Tech Media Pvt. Ltd.
            </textPath>
          </text>
          <path id="circlePath2" d={`M${cxValue*1.75},${cyValue} A${cxValue*(2/3)},${cyValue*(2/3)} 0 0 1 ${cxValue*0.25},${cyValue}`} fill="none" />
          <text font-size={cxValue*(2/3)*0.23} fill="white">
            <textPath href="#circlePath2" startOffset="0">
              Eagle Tech Media Pvt. Ltd.
            </textPath>
          </text>
        </svg>
      </div>
    </>
  )
}

export default Ringrotationone