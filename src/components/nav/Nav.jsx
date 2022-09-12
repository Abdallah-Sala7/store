import React, { useState } from 'react'

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

        <div className='w-36 h-10'>
          <img 
            src="./img/logo.svg" 
            alt="" 
            loading='lazy'
            className='w-full h-full object-contain'
          />
        </div>

        <ul className={`nav-bar ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <li className='py-2 px-3 text-lg font-semibold text-slate-700 capitalize rounded-3xl transition hover:bg-slate-100'>
            <a href="#"> 
            home
            </a>
          </li>

          <li className='py-2 px-3 text-lg font-semibold text-slate-700 capitalize rounded-3xl transition hover:bg-slate-100'>
            <a href="#"> 
            home
            </a>
          </li>

          <li className='py-2 px-3 text-lg font-semibold text-slate-700 capitalize rounded-3xl transition hover:bg-slate-100'>
            <a href="#"> 
            home
            </a>
          </li>

          <li className='py-2 px-3 text-lg font-semibold text-slate-700 capitalize rounded-3xl transition hover:bg-slate-100'>
            <a href="#"> 
            home
            </a>
          </li>
        </ul>

        <div className="flex items-baseline space-x-6">
          <a href="#" className='w-11 h-11 rounded-full hidden items-center justify-center transition hover:bg-slate-100 md:flex'>
            <img
              src='./img/icons/search-outline.svg'
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain'
            />
          </a>

          <a href="#" className='w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-slate-100'>
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

      <div onClick={openNav} className={`overlay-black ${open ? 'translate-x-0' : '-translate-x-full'}`}></div>
    </nav>
  )
}

export default Nav