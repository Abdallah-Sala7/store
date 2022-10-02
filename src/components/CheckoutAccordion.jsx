import React, { useState } from 'react'

const CheckoutAccordion = (props) => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const handleAccordionClick = (e) => {
    setActiveAccordion(!activeAccordion);
  }
  return (
    <div id={props.id} className="scroll-mt-24 mb-5 last-of-type:mb-0 ">
      <div  className={`flex flex-col border border-gray-100 rounded-2xl overflow-hidden`}>
        <div className="flex justify-between items-center p-4 md:p-6">
          <div className="flex items-center gap-5">
            <img 
              src="/img/icons/user.svg" 
              alt="" 
              loading='lazy'
              className='w-8 h-8 object-cover'
            />

            <h1 className='capitalize font-normal text-gray-500'>
              contact info
            </h1>
          </div>

          <a href={'#'+props.id} type='button' onClick={handleAccordionClick} className="px-5 py-2 text-gray-500 bg-gray-50">
            change
          </a>
        </div>
        
        <div className={`p-4 border-t border-gray-100 md:p-6 ${activeAccordion ? 'block' : 'hidden'}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default CheckoutAccordion