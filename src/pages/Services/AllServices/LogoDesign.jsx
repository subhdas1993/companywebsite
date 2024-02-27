import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function LogoDesign() {
  const webcontent1 = {
    head1: "CREATIVE LOGO DESIGNS THAT WIN PEOPLE'S HEART",
    head2: "Logo Design",
    para1: "Start your journey towards success with a professionally designed and creatively crafted logo. Our Logo design Pricing is suitable for all sized businesses",
    head3: "Logo & Business Card",
    para2: "ETM provide you creatively crafted Logo and business card samples that is matching to your ideas and vision.Copyright Ownership will be Transfered of the Selected Design.",
    img1: "../images/courses_services/logo4.jpg",
    img2: "../images/courses_services/logo3.jpg"
  }
  const webcontent2 = {
    head1: "Brand Identity",
    para1: "We make sure that our logos and illustrtion demonstrate the story behind your brand and transform your business to a successful brand identity.Just Approve the design to receive original source files, copyright."
  }
  const webcontent3 = {
    head1: "CREATE A \"WOW\" IMPACT",
    head2: "Trusted by leading brands & startups",
    para1: "The logo is an easily recognizable graphic symbol, that identifies a company, a commercial product, or any public or private entity. We believe if our clients are happy only then can we stay and thrive in business for the long term. for some reason, if you don’t feel satisfied we’re not satisfied as well either we do everything we can to make you happy.",
    para2:"When ETM's professional artists, branding experts, pro marketing experts & creative graphic designers work together on creating a design you don’t just get a logo that looks good but you also get a long term design asset that works for your brand.Our design team will learn about the company, it's brand strategy and personality during the second crucial duscussion either through online or offline mettings."
  }
  return (
    <>
      <PageHead heading="Logo Design" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="Logo Design" />
    </>
  )
}

export default LogoDesign