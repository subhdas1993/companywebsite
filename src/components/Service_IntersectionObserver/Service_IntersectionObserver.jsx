import React, { useRef } from 'react'
import { useInView } from "react-intersection-observer";
import { BsArrow90DegDown } from "react-icons/bs";
import ReadMoreButton2 from '../ReadMoreButton2/ReadMoreButton2';

function Service_IntersectionObserver() {
  const imageRef = useRef(null);
  const { ref: firstContainer, inView: firstInView } = useInView({
    threshold: 0.5
  });

  const { ref: secondContainer, inView: secondInView } = useInView({
    threshold: 0.5
  });

  const { ref: thirdContainer, inView: thirdInView } = useInView({
    threshold: 0.5
  });

  const { ref: forthContainer, inView: forthInView } = useInView({
    threshold: 0.5
  });

  const { ref: fifthContainer, inView: fifthInView } = useInView({
    threshold: 0.5
  });

  const { ref: sixthContainer, inView: sixthInView } = useInView({
    threshold: 0.5
  });

  const getImage = () => {
    if (firstInView)
      return "../imageforIntOb/img1.png";
    if (secondInView)
      return "../imageforIntOb/img2.jpg";
    if (thirdInView)
      return "../imageforIntOb/img3.jpg";
    if (forthInView)
      return "../imageforIntOb/img4.jpg";
    if (fifthInView)
      return "../imageforIntOb/img5.png";
    if (sixthInView)
      return "../imageforIntOb/img6.jpg";
  };

  return (
    <>
      <div className="wrapper font-[Sora] relative">

        <div className='portrait:block landscape:hidden px-10'>
          <div style={{ backgroundImage: 'url("../imageforIntOb/img1.png")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
          <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>01. seo</div>
                <div className='capitalize text-[6vmin] mb-5'>Search Engine Optimization</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>SEO is critical for business growth, and you must prioritize it whether you’re running an ecommerce store or an agency. Without SEO, your online presence will catch dust on the last pages of Google.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />on-page SEO</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />off-page SEO</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Rank better with Professional assistance</div>
                </div>
                <ReadMoreButton2 link="/services/seo" />
              </div>
            </div>

            <div style={{ backgroundImage: 'url("../imageforIntOb/img2.jpg")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
            <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>02. SMM</div>
                <div className='capitalize text-[6vmin] mb-5'>Social Media Marketing</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>SMM is the process of Companies & Brands using social media to advertise and promote their products or services.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Boost Website Traffic</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Increase Brand Awareness</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Synthesized Attractive Strategy</div>
                </div>
                <ReadMoreButton2 link="/services/social_media_marketing" />
              </div>
            </div>

            <div style={{ backgroundImage: 'url("../imageforIntOb/img3.jpg")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
            <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>03. web development</div>
                <div className='capitalize text-[6vmin] mb-5'>Web Design and Development</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>Your website will reflect the features and the nature of your business.A well-made Website is the seed to your Flourishing Business. Let us nourish it!</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Responsive Web Design</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Ecommerce Development</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Static / Dynamic Website</div>
                </div>
                <ReadMoreButton2 link="/services/web_development" />
              </div>
            </div>

            <div style={{ backgroundImage: 'url("../imageforIntOb/img4.jpg")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
            <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>04. logo design</div>
                <div className='capitalize text-[6vmin] mb-5'>Logos and Illustration</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>We craft premium designs for agencies and global brands around the globe..</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Get Your Brand Identity</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Logo & Business Card</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Handover of Source Files</div>
                </div>
                <ReadMoreButton2 link="/services/logo_design" />
              </div>
            </div>

            <div style={{ backgroundImage: 'url("../imageforIntOb/img5.png")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
            <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>05. product packging</div>
                <div className='capitalize text-[6vmin] mb-5'>Unique package always remeber</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>At ETM, get an appealing custom label design at an affordable price! Bottle, box, or pouch — whatever your need may be.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Label Designing</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Influential Packaging Design</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Leave A Lasting Impression</div>
                </div>
                <ReadMoreButton2 link="/services/product_packaging" />
              </div>
            </div>

            <div style={{ backgroundImage: 'url("../imageforIntOb/img6.png")'}} className={`w-full aspect-square bg-cover bg-no-repeat`}></div>
            <div className='w-full flex justify-start items-center h-full mt-[2vmin]'>
              <div className='w-ful5'>
                <div className='uppercase text-[4vmin] mb-5'>06. lead generation</div>
                <div className='capitalize text-[6vmin] mb-5'>boost the company's growth</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>We create demand generation and account-based marketing campaigns to grow our client's businesses.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Accelerate & Optimize</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Highest Data Accuracy</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Qualified Leads Generated Per Month</div>
                </div>
                <ReadMoreButton2 link="/services/lead_generation" />
              </div>
            </div>

        </div>

        <div className='landscape:block portrait:hidden'>
          <div className="image-wrapper">
            <div ref={imageRef} style={{ backgroundImage: `url(${getImage()})`}} className={`sticky top-0 landscape:h-[110vh] aspect-[9/16] xl:aspect-[9/11] bg-cover bg-no-repeat`}></div>
          </div>
          <div className="first" ref={firstContainer}>
            <div className='w-full flex justify-end items-center h-full'>
              <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>01. seo</div>
                <div className='capitalize text-[6vmin] mb-5'>Search Engine Optimization</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>SEO is critical for business growth, and you must prioritize it whether you’re running an ecommerce store or an agency. Without SEO, your online presence will catch dust on the last pages of Google.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />on-page SEO</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />off-page SEO.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Rank better with Professional assistance</div>
                </div>
                <ReadMoreButton2 link="/services/seo" />
              </div>
            </div>
          </div>
          <div className="first" ref={secondContainer}>
            <div className='w-full flex justify-end items-center h-full'>
            <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>02. SMM</div>
                <div className='capitalize text-[6vmin] mb-5'>Social Media Marketing</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>SMM is the process of Companies & Brands using social media to advertise and promote their products or services.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Boost Website Traffic</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Increase Brand Awareness</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Make your business visible online.</div>
                </div>
                <ReadMoreButton2 link="/services/social_media_marketing" />
              </div>
            </div>
          </div>
          <div className="first" ref={thirdContainer}>
            <div className='w-full flex justify-end items-center h-full'>
            <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>03. web development</div>
                <div className='capitalize text-[6vmin] mb-5'>Web Design and Development</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>Your website will reflect the features and the nature of your business.A well-made Website is the seed to your Flourishing Business. Let us nourish it!</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Responsive Web Design</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Make your business visible online.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Make your business visible online.</div>
                </div>
                <ReadMoreButton2 link="/services/web_development" />
              </div>
            </div>
          </div>

          <div className="first" ref={forthContainer}>
            <div className='w-full flex justify-end items-center h-full'>
            <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>04. logo design</div>
                <div className='capitalize text-[6vmin] mb-5'>Logos and Illustration</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>We craft premium designs for agencies and global brands around the globe..</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Get Your Brand Identity</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Logo & Business Card</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Handover of Source Files</div>
                </div>
                <ReadMoreButton2 link="/services/logo_design" />
              </div>
            </div>
          </div>
          <div className="first" ref={fifthContainer}>
            <div className='w-full flex justify-end items-center h-full'>
            <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>05. product packging</div>
                <div className='capitalize text-[6vmin] mb-5'>Unique package always remeber</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>At ETM, get an appealing custom label design at an affordable price! Bottle, box, or pouch — whatever your need may be.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Label Designing</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Influential Packaging Design</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Leave A Lasting Impression</div>
                </div>
                <ReadMoreButton2 link="/services/product_packaging" />
              </div>
            </div>
          </div>
          <div className="first" ref={sixthContainer}>
            <div className='w-full flex justify-end items-center h-full'>
            <div className='pl-[40%] lg:pl-[48%] mr-[-5%] md:mr-[15%] lg:mr-0 pr-[1vmin]'>
                <div className='uppercase text-[4vmin] mb-5'>06. lead generation</div>
                <div className='capitalize text-[6vmin] mb-5'>boost the company's growth</div>
                <div className='pl-10 text-[3vmin]'>
                  <div className='mb-2'>We create demand generation and account-based marketing campaigns to grow our client's businesses.</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Accelerate & Optimize</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Highest Data Accuracy</div>
                  <div className='flex mb-2'><BsArrow90DegDown className='rotate-[-90deg] mr-5' />Qualified Leads Generated Per Month</div>
                </div>
                <ReadMoreButton2 link="/services/lead_generation" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Service_IntersectionObserver