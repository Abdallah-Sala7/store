import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountNav from '../../components/AccountNav'

const Account = () => {
  return (
    <main>
      <header className='pt-28 lg:px-40'>
        <div className='container mb-10'>
          <h1 className='capitalize text-4xl font-bold mb-5 text-gray-900'>
            account
          </h1>

          <p className='text-sm text-gray-600 flex gap-3 flex-wrap sm:text-xl'>
            <span className='text-gray-900 font-semibold'>
              Enrico Cole
            </span>

            <span>
              ciseco@gmail.com
            </span>

            <span>
              Los Angeles, CA
            </span>
          </p>
        </div>
      </header>

      <AccountNav />
      
      <Outlet />
    </main>
  )
}

export default Account