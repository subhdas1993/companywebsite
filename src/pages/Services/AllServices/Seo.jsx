import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function Seo() {
  const webcontent1 = {
    head1: "CREATIVE SOLUTIONS, CREATIVE RESULTS",
    head2: "Search Engine Optimization",
    para1: "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. We don't just help the business to reach it's goals but also help them to reach it's vision.",
    head3: "on-page SEO",
    para2: "On-page SEO refers to all techniques that can be implemented on your website to improve your ranking in SERP (search engine results pages).",
    img1: "../images/courses_services/services-img1.png",
    img2: "../images/courses_services/about-img3.png"
  }
  const webcontent2 = {
    head1: "off-page SEO",
    para1: "off-page SEO refers to everything that can be done outside of your website to improve its visibility on the web."
  }

  const webcontent3 = {
    head1: "SEARCH ENGINE OPTIMIZATION",
    head2: "Solving Problems, Building Brands",
    para1: "SEO is critical for business growth, and you must prioritize it whether you're running an ecommerce store or an agency. Without SEO, your online presence will catch dust on the last pages of Google. And you don't want that.Set your business up for long-term success.",
    para2:"From on-page SEO to technical SEO, there are hundreds of aspects to get better rankings. Plus, Google's ever-changing policies for SERPs make it even more difficult to rank better without professional assistance.Get more qualified traffic on the search terms that matter most to your business. We achieve measurable results by working on every variable that impacts SERPs."
  }
  return (
    <>
      <PageHead heading="SEO"/>
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="SEO" />
    </>
  )
}

export default Seo