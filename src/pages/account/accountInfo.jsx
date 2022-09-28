import React from 'react'

const AccountInfo = () => {
  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <h1 className='text-2xl font-semibold text-gray-900 first-letter:capitalize mb-8 md:text-4xl'>
          account information
        </h1>

        <div className="flex justify-center items-start flex-wrap">
          <div className="w-36 h-36 rounded-full border overflow-hidden flex mb-10 md:mb-0 md:mr-16">
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

          <div className="w-full md:w-auto md:grow">
            <form action="" className='w-full'>
              <div className="w-full mb-5">
                <label htmlFor="name" className='text-xl text-gray-700 capitalize'>
                  full name
                </label>

                <div className="flex mt-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-l-xl border border-r-0 border-gray-200">
                    <img 
                      src="/img/icons/user.svg" 
                      alt=""
                      loading='lazy'
                      className='w-6 h-6 object-contain opacity-60' 
                    />
                  </div>

                  <input 
                    type="text"
                    id='name'
                    defaultValue={"John Doe"}
                    className='h-12 w-full px-5 rounded-r-xl border !border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none' 
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="email" className='text-xl text-gray-700 capitalize'>
                  email
                </label>
                
                <div className="flex mt-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-l-xl border border-r-0 border-gray-200">
                    <img 
                      src="/img/icons/mail-outline.svg" 
                      alt=""
                      loading='lazy'
                      className='w-6 h-6 object-contain opacity-60' 
                    />
                  </div>

                  <input 
                    type="text"
                    id='email'
                    placeholder='ex@mail.com'
                    className='h-12 w-full px-5 rounded-r-xl border !border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none' 
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="address" className='text-xl text-gray-700 capitalize'>
                  address
                </label>
                
                <div className="flex mt-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-l-xl border border-r-0 border-gray-200">
                    <img 
                      src="/img/icons/location-outline.svg" 
                      alt=""
                      loading='lazy'
                      className='w-6 h-6 object-contain opacity-60' 
                    />
                  </div>

                  <input 
                    type="text"
                    id='address'
                    defaultValue={"mansoura,eg"}
                    className='h-12 w-full px-5 rounded-r-xl border !border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none' 
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="date" className='text-xl text-gray-700 capitalize'>date of birth</label>
                
                <div className="flex mt-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-l-xl border border-r-0 border-gray-200">
                    <img 
                      src="/img/icons/user.svg" 
                      alt=""
                      loading='lazy'
                      className='w-6 h-6 object-contain opacity-60' 
                    />
                  </div>

                  <input 
                    type="date" 
                    name="" 
                    id="date"
                    className='h-12 w-full px-5 rounded-r-xl border !border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none' 
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="name" className='text-xl text-gray-700 capitalize'>
                  Phone number
                </label>
                
                <div className="flex mt-3">
                  <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-l-xl border border-r-0 border-gray-200">
                    <img 
                      src="/img/icons/call-outline.svg" 
                      alt=""
                      loading='lazy'
                      className='w-6 h-6 object-contain opacity-60' 
                    />
                  </div>

                  <input 
                    type="text"
                    id='name'
                    defaultValue={"John Doe"}
                    className='h-12 w-full px-5 rounded-r-xl border !border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none' 
                  />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="name" className='text-xl text-gray-700'>
                  bio
                </label>

                <textarea 
                  name="" 
                  id=""
                  defaultValue={'.......'}
                  className='h-36 w-full mt-3 px-5 rounded-xl border !border-gray-200 resize-y focus:outline-none focus:ring-0 focus:shadow-none '
                  ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountInfo