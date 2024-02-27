import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function DigiMark() {
  const webcontent1 = {
    head1: "A GLOBAL STANDARD",
    head2: "Digital Marketing",
    para1: "Digital Marketing is the practice of promoting products and services with the help of Digital Marketing Tools, strategies, and platforms. A Digital Marketing course provides an in-depth understanding of Digital Marketing platforms to help plan an effective Digital Marketing strategy.",
    para21: "Get Professional Excellence in SEO, SEM, SMM, PPC, Lead generation, Digital Marketing Strategy, content Marketing & Facebook Ads, Instagram Ads, Youtube Ads, Google Ads and 50+ modules.",
    para22:"We provide Complete Digital Marketing Course Practical Training + Assignments + Live-projects",
    para23:"",
    para24:"",
    para25:"",
    img1: "../images/courses_services/digital1.png",
    img2: "../images/courses_services/about-img2.png"
  }
  const webcontent2 = { 
    head1:"Let us help you to build your Rewarding Career",
    para1:"The best part of our Training program is that all our courses are practical based and full of innovation. The reason is simple, we believe in quality training and our syllabus is developed and taught by award-winning Digital marketing professionals.This digital marketing certification course gives you an in-depth understanding and advanced knowledge of the most important digital marketing domains.You will be trained by our expert digital marketers, who are also industry practitioners and know the field in and out. Also every module is taught practically as laptops are compulsory in class. At ETM you just do not learn but practically do it yourself.",
    head21:"COURSE DURATION - 3 TO 4 MONTHS",
    head22:"",
    head23:"",
  }
  return (
    <>
      <PageHead heading="Digital Marketing"/>
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} heading="Digital Marketing" />
    </>
  )
}

export default DigiMark