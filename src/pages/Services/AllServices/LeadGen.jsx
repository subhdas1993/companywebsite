import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function LeadGen() {
  const webcontent1 = {
    head1: "MARKETING MUST MEASURABLY IMPACT THE BUSINESS",
    head2: "Lead Generation",
    para1: "In the world of digital marketing service, our lead generation service can serve as your first step to get closer to the customer, based on the interest or inquiry of the products/services.",
    head3: "Accelerate & Optimize",
    para2: "We ETM, find all the potential customers that want your product or services as it is today.Let us maximize your sales efforts by turning leads into business and use your sales data to improve sales efficiency.",
    img1: "../images/courses_services/lead3.png",
    img2: "../images/courses_services/project-details1.jpg"    
  }
  const webcontent2 = { }

  const webcontent3 = {
    head1: "WE ARE OBSESSED WITH GROWTH",
    head2: "Great Products Deserve a Great Sales Organization",
    para1: "At ETM, Our flexible, fractal team approach adapts to your orgOur Leads are NEVER Re-sold to Multiple Companiesanization’s/company sales needs. Whether it’s entering new international markets or establishing regional sales footing, ETM experts has the experience you need.ETM never resold its leads to multiple companies or organisations.Eagletechmedia has specilized and expert team members who helps growing and enterprise IT companies generate qualified leads and opportunities. We create demand generation and account-based marketing campaigns to grow our client's businesses. We help differentiate our clients in the increasingly crowded marketplace.",
    para2:""
  }
  return (
    <>
      <PageHead heading="Lead Generation" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="Lead Generation" />
    </>
  )
}

export default LeadGen