import React from 'react'
import { useParams } from 'react-router-dom';

import DigiMark from './AllCourses/DigiMark';
import WebDesign from './AllCourses/WebDesign';
import MERNStack from './AllCourses/MERNStack';
import GraphDesign from './AllCourses/GraphDesign';
import Course3in1 from './AllCourses/Course3in1';
function EachCourse() {
    const { course } = useParams();
  return (
    <div>
        { course === 'digital_marketing' ? <DigiMark /> : ""}
        { course === 'web_design' ? <WebDesign /> : ""}
        { course === 'full_stack_web_development' ? <MERNStack /> : ""}
        { course === 'graphic_design' ? <GraphDesign /> : ""}
        {/* { course === '3-in-1_master_course' ? <Course3in1 /> : ""} */}
    </div>
  )
}

export default EachCourse