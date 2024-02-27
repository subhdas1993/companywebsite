import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function GraphDesign() {
  const webcontent1 = {
    head1: "LET US NOURISH YOUR CREATIVITY",
    head2: "Graphic Designing",
    para1: "Our one of the best Graphic Design course is designed by expert trainers to fulfill all the aspects of the students at very reasonable fees.Many Graphic Designing Institutes in India have been training students for a long time but how they are focusing on imparting software skills only in their graphic designing courses. ETM is one such best graphic designing institute in Delhi/Delhi NCR which focuses on practical graphic designing skills.",
    para21: "100% Job Assistance",
    para22: "Free Career Counselling",
    para23: "",
    para24: "",
    para25: "",
    img1: "../images/courses_services/graphic3.png",
    img2: "../images/courses_services/graphic4.jpg"
  }
  const webcontent2 = {
    head1: "With ETM, Accelerate Your Techskills",
    para1: "Student interested to learn graphic software's can join our institute to learn basic to advance concepts of graphic software's. This Graphic Design certification course gives you an in-depth understanding and advanced knowledge of the most important graphic designing softwares. Our course is the best Graphics Design course in Delhi for those who want expertise in UI, UX, Photoshop, Illustrator and Indesign. “Along with the quality training of education, we are also leaders in student's job”.",
    head21: "EASY EMI",
    head22: "OFFLINE & ONLINE CLASSES",
    head23: "COURSE DURATION - 3 MONTHS",
  }
  return (
    <>
      <PageHead heading="Graphic Designing" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} heading="Graphic Designing" />
    </>
  )
}

export default GraphDesign