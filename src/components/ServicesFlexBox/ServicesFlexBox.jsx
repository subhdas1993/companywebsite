import React from 'react'
import SVGIMG from '../../../src/serv-icons/0.png'
import SVGIMG2 from '../../../src/serv-icons/1.png'
import SVGIMG3 from '../../../src/serv-icons/2.png'
import ServiceCourseLinkButton from '../ServiceCourseLinkButton/ServiceCourseLinkButton';

function ServicesFlexBox() {
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:p-8 2xl:p-12 md:relative'>
          <div className='hidden 2xl:block 2xl:w-1/2 2xl:h-[85%] 2xl:absolute 2xl:border-b 2xl:border-slate-500 2xl:inset-x-1/4 pb-3'>
            <div className='h-full w-full bg-transparent flex flex-col justify-end items-end'>
              <ServiceCourseLinkButton link="/services/social_media_marketing" />
            </div>
          </div>
          <div className='hidden md:block 2xl:hidden w-full md:h-1/2 md:absolute md:border-r md:border-slate-500 md:left-0 inset-y-1/4'></div>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG} alt="svgimg1" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>Social Media Marketing</div>
          </div>
          <div className='pt-6 md:pb-3 2xl:py-10'>When positioning your business in the eyes of your target audience, social media is the obstacle.We'll help you identify your target audience, track conversions and increase user engagement.
          </div>
          <div className='block 2xl:hidden'>
            <ServiceCourseLinkButton link="/services/social_media_marketing" />
          </div>
        </div>

        <div className='w-1/2 block md:hidden border border-slate-500 mt-3'></div>

        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:p-8 2xl:p-12 2xl:relative'>
          <div className='hidden 2xl:block w-full 2xl:h-1/2 2xl:absolute 2xl:border-x 2xl:border-slate-500 2xl:left-0 2xl:top-1/4'></div>
          <div className='hidden 2xl:block w-1/2 2xl:h-[85%] 2xl:absolute 2xl:border-b 2xl:border-slate-500 inset-x-1/4 pb-3'>
            <div className='h-full w-full bg-transparent flex flex-col justify-end items-end'>
              <ServiceCourseLinkButton link="/services/seo" />
            </div>
          </div>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG2} alt="svgimg2" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>SEO</div>
          </div>
          <div className='pt-6 md:pb-3 2xl:py-10'>We help to design attractive, high-performing websites to take your business next level and increase revenue through custom SEO services, PPC management, and affordable SEO services in India and globally.</div>
          <div className='block 2xl:hidden'>
            <ServiceCourseLinkButton link="/services/seo" />
          </div>
        </div>

        <div className='w-1/2 block md:hidden border border-slate-500 mt-3'></div>

        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:py-0 md:px-8 2xl:p-12 md:relative'>
          <div className='hidden 2xl:block w-1/2 2xl:h-[85%] 2xl:absolute 2xl:border-b 2xl:border-slate-500 inset-x-1/4 pb-3'>
            <div className='h-full w-full bg-transparent flex flex-col justify-end items-end'>
              <ServiceCourseLinkButton link="/services/web_development" />
            </div>
          </div>
          <div className='hidden md:block 2xl:hidden w-1/2 md:h-full md:absolute md:border-y md:border-slate-500 inset-x-1/4 pb-3'>
          <div className='h-full w-full bg-transparent flex flex-col justify-end items-end'>
              <ServiceCourseLinkButton link="/services/web_development" />
            </div>
          </div>
          <div className='hidden md:block 2xl:hidden w-full md:h-1/2 md:absolute md:border-r md:border-slate-500 md:left-0 inset-y-1/4'></div>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG3} alt="svgimg3" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>Web Development</div>
          </div>
          <div className='pt-6 md:pb-20 2xl:pt-10 2xl:py-10 2xl:pb-0'>If you are looking for top-notch Website Designing and Website Development services then ETM is one of the best platform for you.We can offer you the best website development services within your budget.</div>
          <div className='block md:hidden'>
            <ServiceCourseLinkButton link="/services/web_development" />
          </div>
        </div>

        <div className='w-1/2 block md:hidden border border-slate-500 mt-3'></div>

        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:py-0 md:px-8 2xl:p-12 md:relative'>
          <div className='hidden md:block 2xl:hidden w-1/2 md:h-full md:absolute md:border-y md:border-slate-500 inset-x-1/4 pb-3'>
          <div className='h-full w-full bg-transparent flex flex-col justify-end items-end'>
              <ServiceCourseLinkButton link="/services/logo_design" />
            </div>
          </div>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG3} alt="svgimg3" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>Logo Design</div>
          </div>
          <div className='pt-6 md:pb-20 2xl:pt-10 2xl:pb-6'>We design logos that are unique and original. We protect the design and the business behind it by totally adhering to the trademark law.Our logo designs creatively reflect your idea.</div>
          <div className='block md:hidden 2xl:block'>
            <ServiceCourseLinkButton link="/services/logo_design" />
          </div>
        </div>

        <div className='w-1/2 block md:hidden border border-slate-500 mt-3'></div>

        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:p-8 2xl:p-12 md:relative'>
          <div className='hidden 2xl:block w-full h-1/2 2xl:absolute 2xl:border-x 2xl:border-slate-500 2xl:left-0 2xl:top-1/4'></div>
          <div className='hidden md:block 2xl:hidden w-full md:h-1/2 md:absolute md:border-r md:border-slate-500 md:left-0 inset-y-1/4'></div>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG3} alt="svgimg3" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>Product Packaging</div>
          </div>
          <div className='pt-6 md:pb-3 2xl:pt-10 2xl:pb-6'>Designer People believe in crafting the vision from Packaging design that tell magical story leaving a lasting impression. Simplicity and clarity in what we do is our success Secret.</div>
          <div>
            <ServiceCourseLinkButton link="/services/product_packaging" />
          </div>
        </div>

        <div className='w-1/2 block md:hidden border border-slate-500 mt-3'></div>

        <div className='w-full md:basis-1/2 2xl:basis-1/3 p-4 md:p-8 2xl:p-12'>
          <div className='h-20 flex justify-between items-center'>
            <div className='max-w-[60px] 2xl:max-w-none basis-1/6'><img src={SVGIMG3} alt="svgimg3" /></div>
            <div className='basis-5/6 text-xl font-medium px-5'>Lead Generation</div>
          </div>
          <div className='pt-6 md:pb-3 2xl:pt-10 2xl:pb-6'>In the world of digital marketing service, our lead generation service can serve as your first step to get closer to the customer, based on the interest or inquiry of the products/services.</div>
          <div>
            <ServiceCourseLinkButton link="/services/lead_generation" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesFlexBox