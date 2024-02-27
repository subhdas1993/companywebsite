import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function MERNStack() {
  const webcontent1 = {
    head1: "JOIN THE TECH FORCE",
    head2: "Full stack Development",
    para1: "Our FUll Stack website Developer course will help you gain expertise in the latest front-end and back-end technologies of Applicaton Development. Gain hands-on experience with skills and technologies such as HTML, CSS, jquery, Bootstrap, Javascript, React, NodeJs & ExpressJs, MongoDB etc. Get a Full Stack Developer certification from Eagle Tech Media to take your career to new heights !",
    para21: "Real-life Projects",
    para22: "1-on-1 Mentorship",
    para23: "Offline & Online mode",
    para24: "24*7 career support",
    para25: "Guranteed job opportunities",
    img1: "../images/courses_services/full-stack-web-developer.jpg",
    img2: "../images/courses_services/full-stack-web-developer2.jpg"
  }
  const webcontent2 = {
    head1: "At ETM, Learn industry-relevent skills",
    para1: "You'll learn the latest website coding skills from real-world programmers. Whether you're beginner or advanced, ETM's full stack developer course will help you develop and improve your skills from scratch. Enroll in Full Stack Web Development Course to learn front-end development(client-side) & back-end development(server-side) and how they interact. Discover the latest frameworks, technologies and best practices. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company.It is one of the high-demand and paid jobs in the software industry.",
    head21: "EASY EMI",
    head22: "OFFLINE & ONLINE CLASSES",
    head23: "COURSE DURATION - 6 MONTHS",
  }
  return (
    <>
      <PageHead heading="Full Stack Development" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} heading="Full Stack Development" />
    </>
  )
}

export default MERNStack