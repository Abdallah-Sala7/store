import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);

  const openNav = (e) =>{
    setOpen(!open)
    e.preventDefault();
  }

  return (
    <nav className='fixed inset-x-0 h-20 border-b border-slate-200 bg-white bg-opacity-50 backdrop-blur-sm z-40'>
      <div  className='container flex justify-between items-center h-full w-full'>
        <a onClick={openNav} href="#" className='w-10 h-10 md:hidden'>
          <img 
            src="./img/icons/menu-left.svg" 
            alt=""
            loading='lazy'
            className='w-full h-full object-contain' 
          />
        </a>

        <Link to='/' className='w-32 h-8 sm:w-36 sm:h-10'>
          <img 
            src="./img/logo.svg" 
            alt="" 
            loading='lazy'
            className='w-full h-full object-contain'
          />
        </Link>

        <ul className={`nav-bar ${open ? 'translate-x-0 ' : '-translate-x-full'} md:translate-x-0`}>
          <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
            <a href="#" className='w-full py-2 px-3 text-lg'> 
              home
            </a>
          </li>

          <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
            <a href="#" className='w-full py-2 px-3 text-lg'> 
              home
            </a>
          </li>

          <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
            <a href="#" className='w-full py-2 px-3 text-lg'> 
              home
            </a>
          </li>

          <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
            <a href="#" className='w-full py-2 px-3 text-lg'> 
              home
            </a>
          </li>

          <a href="#" onClick={openNav} className=' absolute top-0 right-5 w-10 h-10 rounded bg-gray-700 text-gray-50 flex items-center justify-center md:hidden'>
            <img 
              src="./img/icons/xmark.svg" 
              alt=""
              loading='lazy'
              className='w-3/4 h-3/4 object-contain img-white'
            />
          </a>
        </ul>

        <div className="flex items-baseline md:space-x-6">
          <a href="#" className='w-11 h-11 rounded-full hidden items-center justify-center transition hover:bg-slate-100 md:flex'>
            <img
              src='./img/icons/search-outline.svg'
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain'
            />
          </a>

          <a href="#" className='w-11 h-11 rounded-full items-center justify-center transition hidden hover:bg-slate-100 md:flex'>
            <img
              src='./img/icons/user.svg'
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain'
            />
          </a>

          <a href="#" className='w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-slate-100'>
            <img
              src='./img/icons/cart-outline.svg'
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain'
            />
          </a>
        </div>
      </div>

      <div onClick={openNav} className={`overlay-black   ${open ? 'visible bg-opacity-90' : 'invisible'} md:invisible`}></div>
    </nav>
  )
}

export default Nav