import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function SMMarket() {
  const webcontent1 = {
    head1: "CREATIVE SOLUTIONS, CREATIVE RESULTS",
    head2: "Social Media Marketing",
    para1: "Social media marketing (SMM) is a key digital marketing strategy that delivers unique benefits for brands. SMM is the process of companies using social media to advertise and promote their products or services.",
    head3: "Boost website traffic",
    para2: "Although many social media platforms allow brands to sell their products without going to an external website or landing page, social media is still a great way to increase the traffic.",
    img1: "../images/courses_services/services-img1.png",
    img2: "../images/courses_services/services-img2.png"
  }
  const webcontent2 = {
    head1: "Increase brand awareness",
    para1: "A brand should have high-quality accounts on different social networks to take advantage of the users’ social media interests. In this case, potential customers can reach a brand on their favorite platform."
  }
  const webcontent3 = {
    head1: "SOCIAL MEDIA MARKETING",
    head2: "Solving Problems, Building Brands",
    para1: "Eagle Tech Media help you gain visibility, your customers engage with our informative, valuable and creative content and your business gets the result you want on social media.Our in depth knowledge of these social platforms like Facebook, Instagram, Youtube and Pinterest etc. work helps us to synthesize more attractive strategy for the algorithms of these platforms.",
    para2:"Now a days, half of the world’s population uses social networks for almost three hours each day, SMM is the best way to interact with the audience. This way, your brand is already in the place your customers prefer to spend their time, so it helps you stay close and be more trustworthy. <br/> Our team plans a structured format for the business by rightly analysing the industry's competitors."
  }
  return (
    <>
      <PageHead heading="Social Media Marketing"/>
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="Social Media Marketing" />
    </>
  )
}

export default SMMarket