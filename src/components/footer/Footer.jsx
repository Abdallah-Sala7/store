import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='py-8 border-t border-gray-200 sm:py-12 md:py-24'>
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-8 flex items-center justify-between md:w-1/5 md:mb-0 md:flex-col md:items-start">
            <Link to='/' className='w-32 h-8 sm:w-36 sm:h-10 md:mb-3'>
              <img 
                src="./img/logo.svg" 
                alt="" 
                loading='lazy'
                className='w-full h-full object-contain object-left'
              />
            </Link>
            
            <div className="w-1/2 flex items-center gap-2 md:flex-col md:items-start md:w-full">
              <a href="http://facebook.com" target={'_blank'} title='' className='flex items-center gap-3 group' >
                <img 
                  src="./img/footer/facebook.svg" 
                  alt="" 
                  loading='lazy'
                  className='w-5 h-5 object-contain sm:w-6 sm:h-6'
                />

                <span className='hidden text-base capitalize text-slate-500 group-hover:text-slate-700 md:block'>
                  Facebook
                </span>
              </a>

              <a href="http://youtube.com" target={'_blank'} title='' className='flex items-center gap-3 group' >
                <img 
                  src="./img/footer/youtube.svg" 
                  alt="" 
                  loading='lazy'
                  className='w-5 h-5 object-contain sm:w-6 sm:h-6'
                />

                <span className='hidden text-base capitalize text-slate-500 group-hover:text-slate-700 md:block'>
                  youtube
                </span>
              </a>

              <a href="http://twitter.com" target={'_blank'} title='' className='flex items-center gap-3 group' >
                <img 
                  src="./img/footer/twitter.svg" 
                  alt="" 
                  loading='lazy'
                  className='w-5 h-5 object-contain sm:w-6 sm:h-6'
                />

                <span className='hidden text-base capitalize text-slate-500 group-hover:text-slate-700 md:block'>
                  twitter
                </span>
              </a>

              <a href="http://telegram.com" target={'_blank'} title='' className='flex items-center gap-3 group' >
                <img 
                  src="./img/footer/telegram.svg" 
                  alt="" 
                  loading='lazy'
                  className='w-5 h-5 object-contain sm:w-6 sm:h-6'
                />

                <span className='hidden text-base capitalize text-slate-500 group-hover:text-slate-700 md:block'>
                  telegram
                </span>
              </a>
            </div>
          </div>

          <div className="w-1/2 mb-7 flex flex-col justify-between md:w-1/5 md:mb-0">
            <h1 className='text-base font-bold text-slate-700 capitalize mb-4 sm:text-lg md:text-base lg:text-xl'>
              Getting started
            </h1>

            <ul className='text-base text-slate-500'>
              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  release notes
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  browser Support
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  upgrade Guide
                </a>
              </li>

              <li className=''>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  dark Mode
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 mb-7 flex flex-col justify-between md:w-1/5 md:mb-0">
            <h1 className='text-base font-bold text-slate-700 capitalize mb-4 sm:text-lg md:text-base lg:text-xl'>
              explore
            </h1>

            <ul className='text-base text-slate-500'>
              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  Prototyping
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  design systems
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  pricing
                </a>
              </li>

              <li className=''>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  security
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 flex flex-col justify-between md:w-1/5">
            <h1 className='text-base font-bold text-slate-700 capitalize mb-4 sm:text-lg md:text-base lg:text-xl'>
              resources
            </h1>

            <ul className='text-base text-slate-500'>
              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  best practices
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  support
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  developers
                </a>
              </li>

              <li className=''>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  learn design
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 flex flex-col justify-between md:w-1/5">
            <h1 className='text-base font-bold text-slate-700 capitalize mb-4 sm:text-lg md:text-base lg:text-xl'>
              community
            </h1>

            <ul className='text-base text-slate-500'>
              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  discussion Forums
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  code of Conduct
                </a>
              </li>

              <li className='mb-2'>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  contributing
                </a>
              </li>

              <li className=''>
                <a  href='#' className='text-xs capitalize text-slate-500 hover:text-slate-700 sm:text-sm lg:text-base'>
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer