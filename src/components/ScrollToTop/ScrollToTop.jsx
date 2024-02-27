import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTop() {
    const [scrollValue, setScrollValue] = useState(0);

    const calcScrollValue = () => {
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        setScrollValue(scrollValue);

        const scrollProgress = document.getElementById("progress");
        if (pos > 20) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
    };

    const handleScrollToTop = () => {
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener("scroll", calcScrollValue);
        return () => {
            window.removeEventListener("scroll", calcScrollValue);
        };
    }, []);

    useEffect(() => {
        const scrollProgress = document.getElementById("progress");
        scrollProgress.style.background = `conic-gradient(#b4b4b4 ${scrollValue}%, transparent ${scrollValue}%)`;
    }, [scrollValue]);
    // #242424
    return (
        <>
            <div id="progress" onClick={handleScrollToTop} style={{ display: 'none' }}>
                {/* Your progress bar content goes here */}
                <div id="progress-value">
                    <IoIosArrowUp size={28} />
                    {/* {scrollValue}% */}
                </div>
            </div>
        </>
    )
}

export default ScrollToTop