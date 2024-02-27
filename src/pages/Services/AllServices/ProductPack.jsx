import React from 'react'
import PageHead from '../../../components/PageHead/PageHead'
import CourseServiceLayout from '../../../components/CourseServiceLayout/CourseServiceLayout'

function ProductPack() {
  const webcontent1 = {
    head1: "WHAT LOOKS GOOD, SELLS GOOD",
    head2: "Product packaging",
    para1: "Here at ETM, we specialize in crafting custom packaging with the highest perceived value off the shelf. We promise your product will get the great Product packaging it deserves.",
    head3: "Label Designing",
    para2: "Label Packaging is the display of all the information on the packaging material or product itself. The end result that you will obtain with this package is going to be a stunning label design that would be eye-catching and totally appealing for your customers.",
    img1: "../images/courses_services/product.jpg",
    img2: "../images/courses_services/product2.jpg"
  }

  const webcontent2 = { }

  const webcontent3 = {
    head1: "A ULTIMATE GUIDE TO PRODUCT PACKAGING DESIGN",
    head2: "Have a vision? We are here to help!",
    para1: "At ETM, get an appealing custom label design at an affordable price! Bottle, box, or pouch — whatever your need may be.We provide packaging thst is functional, innovative and desirable to your clients.Our work encompases Branding, Graphic and Identity design, Packaging design, Product design and Digital experiences.Our team of engineers and designers will assist you during the complete project.We are a design studio where the ownere of the business are creators of the work and serve as the primary contact for every client.We have adopted this unique structure to reflect the passion and commitment we have for our craft.",
    para2:""
  }
  return (
    <>
      <PageHead heading="Product Packaging" />
      <CourseServiceLayout webcontent1={webcontent1} webcontent2={webcontent2} webcontent3={webcontent3} heading="Product Packaging" />
    </>
  )
}

export default ProductPack