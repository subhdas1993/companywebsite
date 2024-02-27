import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function WebDesign() {
  const webcontent1 = {
    head1: "WINGS TO YOUR CAREER",
    head2: "Web Design",
    para1: "A Web Designer develop the design, layout, and graphics of a website & often coordinate with a web developer for coding of a website. If you are someone with a knack for programming skills coupled with an eye for crafting stunning aesthetics, you can pursue a web designing course. Grow your career with ETM.",
    para21: "Live Projects",
    para22: "1-on-1 Mentorship",
    para23: "Offline & Online mode",
    para24: "100% Job Assistance",
    para25: "Free Career Counselling",
    img1: "../images/courses_services/web-design4.png",
    img2: "../images/courses_services/banner-img3.jpg"
  }
  const webcontent2 = {
    head1: "At ETM, Get Comprehensive Learning Experience",
    para1: "It's one of the best web design courses for HTML, HTML5, CSS, CSS3, Javascript, JQuery, Bootstrap, Responsive Design, PHP, MySQL, WordPress. According to a recent salary survey data by PayScale, the average salary offered to a Web Designer in India is INR 2,83,036 per annum. All of our students get 100% Placement Assistance after completion of their course. With this course, the student would be able to develop their skillset in designing internationally standard and state of art websites. At the end of this course, Projects would be conducted and each student would be expected to build a web design portfolio for the purpose of placements. Join our course today to get access!",
    head21: "EASY EMI",
    head22: "OFFLINE & ONLINE CLASSES",
    head23: "COURSE DURATION - 3 to 4 MONTHS",
  }
  return (
    <>
      <PageHead heading="Web Designing" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} heading="Web Designing" />
    </>
  )
}

export default WebDesign