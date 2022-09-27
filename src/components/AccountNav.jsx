import React from 'react'
import { NavLink } from 'react-router-dom'

const AccountNav = () => {
  return (
    <nav>
      <div className="container">
        <ul className="flex items-center gap-6 border-y border-gray-300 account">
          <li className='py-7'>
            <NavLink end to={'/account'} className='text-lg font-normal text-gray-400 py-7 capitalize hover:text-gray-900' >
              Account info
            </NavLink>
          </li>

          <li className='py-7'>
            <NavLink to={'wishlist'} className='text-lg font-normal text-gray-400 py-7 capitalize hover:text-gray-900'>
              wishlist
            </NavLink>            
          </li>

          <li className='py-7'>
            <NavLink to={'order'} className='text-lg font-normal text-gray-400 py-7 capitalize hover:text-gray-900'>
              My order
            </NavLink>            
          </li>

          <li className='py-7'>
            <NavLink to={'changepassword'} className='text-lg font-normal text-gray-400 py-7 capitalize hover:text-gray-900'>
              Change password
            </NavLink>
          </li>

          <li className='py-7'>
            <NavLink to={'changebilling'} className='text-lg font-normal text-gray-400 py-7 capitalize hover:text-gray-900'>
              Change Billing
            </NavLink>            
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AccountNav