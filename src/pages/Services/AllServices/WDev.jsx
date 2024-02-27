import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function WDev() {
  const webcontent1 = {
    head1: "CREATIVE SOLUTIONS, CREATIVE RESULTS",
    head2: "Web Design and Development",
    para1: "Your website will reflect the features and the nature of your business from all angles.It will be the face of your business. A well-made Website is the seed to your Flourishing Business. Let us nourish it!",
    head3: "Responsive Web Design",
    para2: "A well-designed website is one that has a clear call to action, engaging and high quality content, attractive visual design, is user friendly, mobile friendly.",
    img1: "../images/courses_services/banner-img5.png",
    img2: "../images/courses_services/services-img2.png"
  }
  const webcontent2 = {
    head1: "Ecommerce Development",
    para1: "Eagle Tech provides e-commerce website designing and development solutions for you.Convert your visitors into customers with E-Commerce solutions."
  }
  const webcontent3 = {
    head1: "WEB DESIGN AND DEVELOPMENT",
    head2: "Solving Problems, Building Brands",
    para1: "We design and develop customized websites keeping in mind the specific requirements of our customers and establish their unique brand identity. Through uniquely designed pages, carefully selected images, compelling content on every page and intuitive navigation, we provide an immersive experience for users. Our Web Development Services for enterprises and organizations to improve their digital presence and skyrocket their sales.",
    para2:"ETM provide a comprehensive web design and web development solution that caters to the need of the contemporary society. Be it a responsive web design, website redesign, eCommerce website design or mobile website design, we dedicatedly work towards delivering the best customer satisfaction."
  }
  return (
    <>
      <PageHead heading="Web Development" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="Web Development" />
    </>
  )
}

export default WDev