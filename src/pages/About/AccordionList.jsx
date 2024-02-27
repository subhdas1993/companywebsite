import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        {/* <img
                className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"}`}
                src={ARROW}
                alt="Chevron"
              /> */}
        <div className='ml-auto transition-transform duration-200 ease-out text-2xl'>
          {isEnter && <FiMinusSquare />}
          {!isEnter && <FiPlusSquare />}
        </div>
      </>
    )}
    //   className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `cursor-none flex w-full p-4 text-left hover:bg-slate-100 hover:text-black ${isEnter && "bg-slate-200 text-black"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "p-4" }}
  />
);

function AccordionList() {
  return (
    <div>
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="Social Media Optimization" initialEntered>
        Social media optimization (SMO) involves using social media platforms to grow a company or organization's online presence including Facebook, Twitter, Instagram, Snapchat, YouTube, Pinterest.
        </AccordionItem>

        <AccordionItem header="Content Generation">
        Content generation helps people to discover your business, brand, and products. When you create content, you’re providing free and useful information to your audience, attracting potential customers to your website.
        </AccordionItem>

        <AccordionItem header="Pay Per Click Services">
        Pay-per-click (PPC) is an online advertising model in which an advertiser pays a publisher every time an advertisement link is “clicked” on. Alternatively, PPC is known as the cost-per-click (CPC) model.
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AccordionList