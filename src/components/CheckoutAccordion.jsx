import React from 'react'

const CheckoutAccordion = (props) => {
  const {id, img, title, info, children, isActive=false} = props;
  return (
    <div id={id} className="scroll-mt-24 mb-5 last-of-type:mb-0">
      <div  className={`flex flex-col border border-gray-100 rounded-2xl overflow-hidden`}>
        <div className="flex flex-col justify-between  gap-5 flex-wrap p-4 sm:flex-row sm:items-center md:p-6">
          <div className="flex gap-8 items-center sm:items-start">
            <img 
              src={img} 
              alt="" 
              loading='lazy'
              className='w-6 h-6 object-cover opacity-60'
            />

            <div>
              <h1 className='uppercase font-normal text-gray-600'>
                {title}
              </h1>

              <h2 className='capitalize font-medium text-gray-600 text-sm line-clamp-1'>
                {info}
              </h2>
            </div>
          </div>

          <a href={'#'} type='button' className="px-4 py-1 rounded-md text-center text-gray-600 bg-gray-100">
            change
          </a>
        </div>
        
        <div className={`p-4 border-t border-gray-100 md:p-6 ${isActive ? 'block' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CheckoutAccordion