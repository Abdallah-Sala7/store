import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const openNav = (e) =>{
    setOpen(!open)
    e.preventDefault();
  }

  const openSearch = (e) =>{
    setSearch(!search)
    e.preventDefault();
  }

  return (
    <nav className='fixed inset-x-0 h-20 border-b border-slate-200 bg-white bg-opacity-50 backdrop-blur-sm z-40'>
      <div  className='container flex justify-between items-center h-full w-full'>
        <a onClick={openNav} href="#" className='w-10 h-10 md:hidden'>
          <img 
            src={"/img/icons/menu-left.svg"}
            alt=""
            loading='lazy'
            className='w-full h-full object-contain' 
          />
        </a>

        <Link to='/' className='w-32 h-8 sm:w-36 sm:h-10'>
          <img 
            src={"/img/logo.svg"}
            alt="" 
            loading='lazy'
            className='w-full h-full object-contain'
          />
        </Link>

        <div className={`nav-bar ${open ? 'translate-x-0 ' : '-translate-x-full'} md:translate-x-0`}>
          <ul className={`mb-5 text-center items-center flex-col space-y-6 md:mb-0 md:flex-row md:space-x-4 md:space-y-0 ${search ? 'md:hidden' : 'flex'}`}>
            <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
              <Link to={'/'} className='w-full py-2 px-3 text-lg'> 
                home
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
              <Link to={'/product'} className='w-full py-2 px-3 text-lg'> 
                men
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
              <Link to={'/product'} className='w-full py-2 px-3 text-lg'> 
                women
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors flex justify-center items-center hover:bg-gray-700 hover:text-primary-100 md:rounded-full '>
              <Link to={'/product'} className='w-full py-2 px-3 text-lg'> 
                sport
              </Link>
            </li>

            <a href="#" onClick={openNav} className=' absolute top-0 right-5 w-10 h-10 rounded bg-gray-700 text-gray-50 flex items-center justify-center md:hidden'>
              <img 
                src={"/img/icons/xmark.svg"}
                alt=""
                loading='lazy'
                className='w-3/4 h-3/4 object-contain img-white'
              />
            </a>
          </ul>       

          <form action="" className={`w-11/12 h-14 m-auto md:w-96 ${search ? 'block' : 'md:hidden'}`}>
            <div className="relative w-full h-full ">
              <input 
                type="text"
                placeholder='Search'
                className='w-full h-full bg-slate-200 rounded-xl px-10 py-2 focus:outline-none border-none !ring-0'
              />

              <a href="#" className=' absolute top-1/2 -translate-y-1/2 left-2 w-6 h-6 group'>
                <img
                  src={"/img/icons/search-outline.svg"}
                  alt=""
                  loading='lazy'
                  className='w-full h-full object-contain opacity-60 group-hover:opacity-100'
                />
              </a>

              <a href="#" onClick={openSearch} className=' absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 group'>
                <img
                  src={"/img/icons/xmark.svg"}
                  alt=""
                  loading='lazy'
                  className='w-full h-full object-contain opacity-60 hidden group-hover:opacity-100 md:block'
                />
              </a>
            </div>
          </form>          
        </div>

        <div className="flex items-baseline md:space-x-6">
          <a href="#" onClick={openSearch} className={`w-11 h-11 rounded-full hidden items-center justify-center transition hover:bg-gray-900 group ${search ? 'hidden' : 'md:flex'}`}>
            <img
              src={'/img/icons/search-outline.svg'}
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain group-hover:invert'
            />
          </a>

          <a href="#" className='w-11 h-11 rounded-full items-center justify-center transition hidden hover:bg-gray-900 group md:flex'>
            <img
              src={'/img/icons/user.svg'}
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain group-hover:invert'
            />
          </a>

          <Link to={'/cart'} className='w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-gray-900 group'>
            <img
              src={'/img/icons/cart-outline.svg'}
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain group-hover:invert'
            />
          </Link>
        </div>
      </div>

      <div onClick={openNav} className={`overlay-black   ${open ? 'visible bg-opacity-90' : 'invisible'} md:invisible`}></div>
    </nav>
  )
}

export default Nav