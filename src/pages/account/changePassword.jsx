import React from 'react'

const ChangePassword = () => {
  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <h1 className='font-bold text-3xl text-gray-900 capitalize mb-8 sm:text-5xl'>
          change password
        </h1>

        <div className="w-full max-w-sm">
          <form action="" className='flex flex-col gap-5'>
            <div className="flex flex-col gap-2">
              <label htmlFor="currentPassword" className='text-gray-700 font-semibold'>
                current password
              </label>

              <input
                type="password"
                id='currentPassword'
                className='border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="newPassword" className='text-gray-700 font-semibold'>
                new password
              </label>

              <input
                type="password"
                id='newPassword'
                className='border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirm Password" className='text-gray-700 font-semibold'>
                confirm  password
              </label>

              <input
                type="password"
                id='confirm Password'
                className='border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200'
              />
            </div>

            <a href="#" className='custom-btn'>
              change password
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword