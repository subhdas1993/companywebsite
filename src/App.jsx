import React, { useState, useEffect } from 'react';
// import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import EachService from './pages/Services/EachService'
import Courses from './pages/Courses/Courses'
import EachCourse from './pages/Courses/EachCourse'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

import { Cursor } from "./Cursor";
import { useSpring, animated } from "react-spring";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    transform: `translate3d(0px, 0px, 0)`
  }));
  function handleMouseMove(event) {
    setAnimatedProps({
      transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    });
  }

  const isTouchDevice = "ontouchstart" in window;

  return (
    <>
      <Router>
        <div onMouseMove={handleMouseMove} className={`${isTouchDevice ? '' : 'customCursor'}`}>
          <div className='bg-transparent'>
            <NavBar pos="static" />
            <div className={`bg-[#242424] z-[5] fixed left-0 w-full h-fit transition-[top] duration-[2s] ease-in ${isScrolled ? 'top-0' : 'top-[-100%]'}`}>
              <NavBar pos="fixed" />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:service" element={<EachService />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:course" element={<EachCourse />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div style={{display: `${isTouchDevice ? 'none' : 'block' }`}} className="containerCursor">
            <animated.div style={animatedProps} className="wrapperCursor">
              <Cursor />
            </animated.div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
