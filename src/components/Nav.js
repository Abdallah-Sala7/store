import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [search, setSearch] = useState(false);

  const {totalAmount} = useSelector(state => state.cart)

  const openNav = (e) =>{
    setOpen(!open)
    e.preventDefault();
  }

  const handleOpenUser = (e) =>{
    setOpenUser(!openUser)
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
          <a href="#" onClick={openNav} className=' absolute top-5 right-5 w-10 h-10 rounded bg-gray-700 text-gray-50 flex items-center justify-center md:hidden'>
            <img 
              src={"/img/icons/xmark.svg"}
              alt=""
              loading='lazy'
              className='w-3/4 h-3/4 object-contain img-white'
            />
          </a>

          <ul className={`mb-5 flex-col space-y-6 pb-5 border-b border-gray-300 md:border-none md:p-0 md:mb-0 md:flex-row md:space-x-4 md:space-y-0 ${search ? 'md:hidden' : 'flex'}`}>
            <li className='w-full font-semibold text-gray-700 capitalize transition-colors hover:bg-gray-700 hover:bg-opacity-10 md:rounded-full '>
              <Link to={'/'} className='block py-3 px-5 text-lg'> 
                home
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors hover:bg-gray-700 hover:bg-opacity-10 md:rounded-full '>
              <Link to={'/product'} className='block py-3 px-5 text-lg'> 
                men
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors hover:bg-gray-700 hover:bg-opacity-10 md:rounded-full '>
              <Link to={'/product'} className='block py-3 px-5 text-lg'> 
                women
              </Link>
            </li>

            <li className='w-full font-semibold text-gray-700 capitalize transition-colors hover:bg-gray-700 hover:bg-opacity-10 md:rounded-full '>
              <Link to={'/product'} className='block py-3 px-5 text-lg'> 
                sport
              </Link>
            </li>
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

          <div className={`relative overflow-hidden z-50 ${openUser ? 'md:overflow-visible' : ''}`}>
            <a href="#" onClick={handleOpenUser} className='w-11 h-11 rounded-full items-center justify-center transition hidden hover:bg-gray-900 group md:flex'>
              <img
                src={'/img/icons/user.svg'}
                alt=''
                loading='lazy'
                className='w-7 h-7 object-contain group-hover:invert'
              />
            </a>

            <div className={`absolute top-16 right-0 w-64 py-6 px-5 rounded-3xl shadow-2xl bg-white transition-all duration-300 opacity-0 translate-y-5 lg:left-0 lg:-translate-x-1/2  ${openUser ? 'opacity-100 translate-y-0' : ''}`}>
              <div className='flex gap-5 pb-3 border-b border-gray-200'>
                <div className='w-12 h-12 rounded-full overflow-hidden '>
                  <img
                    src={'/img/user.webp'}
                    alt=''
                    loading='lazy'
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='flex flex-col justify-between'>
                  <h1 className='text-lg capitalize text-gray-900 font-semibold'>
                    jescy
                  </h1>

                  <p className='text-gray-600 italic text-sm'>
                    los angeles, ca
                  </p>
                </div>
              </div>

              <div className='py-3 border-b border-gray-200'>
                <a href="#" className='flex items-center gap-5 px-4 py-3 rounded-lg transition hover:bg-gray-100'>
                  <img
                    src={'/img/icons/user.svg'}
                    alt=''
                    loading='lazy'
                    className='w-5 h-5 object-contain opacity-70'
                  />

                  <span className='text-sm text-gray-700 font-semibold capitalize'>
                    My Account
                  </span>
                </a>

                <a href="#" className='flex items-center gap-5 px-4 py-3 rounded-lg transition hover:bg-gray-100'>
                  <img
                    src={'/img/icons/file.svg'}
                    alt=''
                    loading='lazy'
                    className='w-5 h-5 object-contain opacity-70'
                  />

                  <span className='text-sm text-gray-700 font-semibold capitalize'>
                    my order
                  </span>
                </a>

                <a href="#" className='flex items-center gap-5 px-4 py-3 rounded-lg transition hover:bg-gray-100'>
                  <img
                    src={'/img/icons/heart-regular.svg'}
                    alt=''
                    loading='lazy'
                    className='w-5 h-5 object-contain opacity-70'
                  />

                  <span className='text-sm text-gray-700 font-semibold capitalize'>
                    wishlist
                  </span>
                </a> 
              </div>

              <div className='pt-3'>
                <a href="#" className='flex items-center gap-5 px-4 py-3 rounded-lg transition hover:bg-gray-100'>
                  <img
                    src={'/img/icons/help.svg'}
                    alt=''
                    loading='lazy'
                    className='w-5 h-5 object-contain opacity-70'
                  />

                  <span className='text-sm text-gray-700 font-semibold capitalize'>
                    help
                  </span>
                </a>

                <a href="#" className='flex items-center gap-5 px-4 py-3 rounded-lg transition hover:bg-gray-100'>
                  <img
                    src={'/img/icons/log-out.svg'}
                    alt=''
                    loading='lazy'
                    className='w-5 h-5 object-contain opacity-70'
                  />

                  <span className='text-sm text-gray-700 font-semibold capitalize'>
                    log out
                  </span>
                </a> 
              </div>
            </div>

            <div onClick={handleOpenUser} className={`overlay-black bg-opacity-0 -z-10 invisible ${openUser? 'md:visible' : ''}`}></div>
          </div>


          <Link to={'/cart'} className='relative w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-gray-900 group'>
            <img
              src={'/img/icons/cart-outline.svg'}
              alt=''
              loading='lazy'
              className='w-7 h-7 object-contain group-hover:invert'
            />

            <span className='absolute top-0 right-0 w-5 h-5 bg-blue-500 text-white rounded-full text-center leading-5 text-sm'>
              {totalAmount > 99 ? '99+' : totalAmount}
            </span>
          </Link>
        </div>
      </div>

      <div onClick={openNav} className={`overlay-black   ${open ? 'visible bg-opacity-90' : 'invisible'} md:invisible`}></div>
    </nav>
  )
}

export default Nav