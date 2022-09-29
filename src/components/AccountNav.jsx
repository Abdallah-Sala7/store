import React from 'react'
import { NavLink } from 'react-router-dom'

const AccountNav = () => {
  return (
    <nav className='lg:px-40'>
      <div className="container">
        <ul className="w-full flex items-center gap-6 border-y border-gray-300 overflow-x-auto account remove-scrollbar">
          <li>
            <NavLink end to={'/account'} className='font-normal inline-block text-gray-400 py-7 capitalize hover:text-gray-900 whitespace-nowrap md:text-lg'>
              Account info
            </NavLink>
          </li>

          <li>
            <NavLink to={'wishlist'} className='font-normal inline-block text-gray-400 py-7 capitalize hover:text-gray-900 whitespace-nowrap md:text-lg'>
              wishlist
            </NavLink>            
          </li>

          <li>
            <NavLink to={'order'} className='font-normal inline-block text-gray-400 py-7 capitalize hover:text-gray-900 whitespace-nowrap md:text-lg'>
              My order
            </NavLink>            
          </li>

          <li>
            <NavLink to={'changepassword'} className='font-normal inline-block text-gray-400 py-7 capitalize hover:text-gray-900 whitespace-nowrap md:text-lg'>
              Change password
            </NavLink>
          </li>

          <li>
            <NavLink to={'changebilling'} className='font-normal inline-block text-gray-400 py-7 capitalize hover:text-gray-900 whitespace-nowrap md:text-lg'>
              Change Billing
            </NavLink>            
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AccountNav