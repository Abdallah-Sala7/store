import React from 'react'

const AccountInfo = () => {
  return (
    <section className='py-8 sm:py-12 md:py-24'>
      <div className="container">
        <h1 className='text-2xl font-semibold text-gray-900 first-letter:capitalize mb-8 md:text-4xl'>
          account infomation
        </h1>

        <div className="flex justify-between items-start flex-wrap">
          <div className="w-full flex items-center mb-10 md:mb-0 md:w-36">
            <div className="w-36 h-36 rounded-full border overflow-hidden flex">
              <label htmlFor="chosse" className='relative z-10 w-full h-full cursor-pointer flex flex-col items-center justify-center'>
                <img
                  src='/img/user.webp'
                  alt=''
                  loading='lazy'
                  className='absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50' 
                />

                <img 
                  src="/img/icons/image-outline.svg" 
                  alt=""
                  loading='lazy'
                  className='w-8 h-8 object-contain invert' 
                />
                <span className='text-white text-sm font-semibold capitalize'>
                  change image
                </span>
              </label>

              <input 
                type="file" 
                name="" 
                id="chosse"
                className='hidden'
              />              
            </div>

            <div className="w-full">
              <form action="" className='w-full'>
                <div className="w-full mb-5 flex">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-r-lg">
                    <img 
                      src="/img/icons/user.svg" 
                      alt=""
                      loading='lazy'
                      className='w-8 h-8 object-contain' 
                    />
                  </div>

                  <input 
                    type="text"
                    defaultValue={"John Doe"}
                    className='h-12 px-5 rounded-r-lg border focus:outline-none focus:border-primary' 
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountInfo