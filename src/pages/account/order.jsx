import React from 'react'

const Order = () => {
  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <h1 className='text-xl font-semibold text-gray-900 first-letter:capitalize mb-8 sm:text-2xl md:text-4xl'>
          order history
        </h1>
        <div className="border border-gray-200 rounded-xl  overflow-hidden">
          <div className="bg-slate-100 p-8 border-b border-gray-200 flex flex-col justify-center items-center flex-wrap sm:justify-between sm:flex-row">
            <div className='mb-5 sm:mb-0'>
              <p className='text-lg font-bold mb-3 text-gray-700'>
                #WU3746HGG12
              </p>

              <div className='flex items-baseline gap-4'>
                <p className='text-gray-500'>
                  12/12/2020
                </p>

                <p className='text-blue-500 capitalize'>
                  delvered
                </p>
              </div>
            </div>

            <a href="#" className='px-6 py-2 border border-gray-300 text-gray-500 bg-white rounded-full'>
              view order
            </a>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            <div className="w-full flex flex-col items-center p-4 sm:p-8 sm:items-stretch sm:flex-row">
              <div className="w-36 h-36 mb-5 mr-3 bg-slate-100 rounded-2xl overflow-hidden  shrink-0 sm:mr-5 sm:mb-0">
                <img 
                  src={'/img/tshirt.webp'}
                  alt=""
                  loading='lazy'
                  className='w-full h-full object-contain'
                />
              </div>

              <div className="grow w-full flex justify-between flex-wrap sm:w-auto md:py-1">
                <div className="mb-5 flex flex-col justify-between sm:mb-0">
                  <div className='mb-3 sm:mb-0'>
                    <h2 className='text-gray-800 mb-2 text-lg font-semibold capitalize line-clamp-1'>
                      Rey Nylon Backpack
                    </h2>

                    <p className='text-gray-500 flex items-center gap-5 divide-x'>
                      <span>
                        Natural
                      </span>

                      <span className='uppercase pl-5'>
                        XL
                      </span> 
                    </p>                    
                  </div>

                  <p className='text-gray-500'>
                    Qty 1
                  </p>
                </div>

                <div className="w-full flex justify-between sm:w-auto sm:flex-col">
                  <h3 className='py-1 px-3 text-green-500 font-semibold leading-none border-2 border-green-400 rounded-md sm:text-lg'>
                    $ 99.00
                  </h3>

                  <a href="#" className='text-blue-500 font-medium first-letter:capitalize'>
                    Leave review
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center p-4 sm:p-8 sm:items-stretch sm:flex-row">
              <div className="w-36 h-36 mb-5 mr-3 bg-slate-100 rounded-2xl overflow-hidden  shrink-0 sm:mr-5 sm:mb-0">
                <img 
                  src={'/img/tshirt.webp'}
                  alt=""
                  loading='lazy'
                  className='w-full h-full object-contain'
                />
              </div>

              <div className="grow w-full flex justify-between flex-wrap sm:w-auto md:py-1">
                <div className="mb-5 flex flex-col justify-between sm:mb-0">
                  <div className='mb-3 sm:mb-0'>
                    <h2 className='text-gray-800 mb-2 text-lg font-semibold capitalize line-clamp-1'>
                      Rey Nylon Backpack
                    </h2>

                    <p className='text-gray-500 flex items-center gap-5 divide-x'>
                      <span>
                        Natural
                      </span>

                      <span className='uppercase pl-5'>
                        XL
                      </span> 
                    </p>                    
                  </div>

                  <p className='text-gray-500'>
                    Qty 1
                  </p>
                </div>

                <div className="w-full flex justify-between sm:w-auto sm:flex-col">
                  <h3 className='py-1 px-3 text-green-500 font-semibold leading-none border-2 border-green-400 rounded-md sm:text-lg'>
                    $ 99.00
                  </h3>

                  <a href="#" className='text-blue-500 font-medium first-letter:capitalize'>
                    Leave review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order