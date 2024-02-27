import React from 'react'
import ABOUTCSS from '../About/About.module.css'

function ETMwebeffect() {
    const text = "www.eagletechmedia.com";
    const waveText = [];

  for (let i in text) {
    if (text[i] === " ") {
      waveText.push(<span key={i}>&nbsp;</span>);
    } else {
      waveText.push(<span key={i}>{text[i]}</span>);
    }
  }
  return (
    <>
        <div className={`${ABOUTCSS.wavetext} portrait:scale-50 landscape:scale-50 lg:landscape:scale-100 h-fit w-fit bg-[#242424] absolute flex justify-center items-center overflow-hidden text-[2vmax] lg:text-[1.2vmax]`}>
          {/* text-xs md:text-[1.2vmin] */}
            {waveText}
        </div>
    </>
  )
}

export default ETMwebeffect