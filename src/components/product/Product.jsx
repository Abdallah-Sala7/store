import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}$`;
}

function Product() {

  const [openRange, setOpenRange] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openSize, setOpenSize] = useState(false)
  const [openCat, setOpenCat] = useState(false)

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const handleOpenRange = (e) => {
    e.preventDefault()
    setOpenRange(!openRange)
  }

  const handleOpenColor = (e) => {
    e.preventDefault()
    setOpenColor(!openColor)
  }

  const handleOpenSize = (e) => {
    e.preventDefault()
    setOpenSize(!openSize)
  }

  const handleOpenCat = (e) => {
    e.preventDefault()
    setOpenCat(!openCat)
  }

  return (
    <main>
      <header className='pt-48 pb-20 '>
        <div className="container ">
          <div className="pb-20 border-b border-gray-200 mb-20">
            <h1 className='text-2xl text-gray-900 font-semibold mb-5 capitalize md:mb-8 md:text-5xl'>
              man collection
            </h1>

            <p className='text-gray-600 md:text-lg md:w-1/2'>
              We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.
            </p>                
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative">
                <a href="#" onClick={handleOpenRange} className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
                  <img
                    src='./img/icons/filter/dollar-sign-solid.svg'
                    alt='filter price'
                    loading='lazy'
                    className='w-4 h-4 object-contain mr-2'
                  />

                  <span className='text-gray-500'>
                    {`${value[0]}$`} - {`${value[1]}$`}
                  </span>
                </a>

                <div className="absolute top-14 left-0 bg-white border border-gray-300 rounded-lg shadow-md p-5">
                  <h2 className='text-xl font-medium first-letter:capitalize text-gray-900 mb-5 whitespace-nowrap'>
                    price range
                  </h2>

                  <div className="w-80 mb-8">
                    <Box sx={{}}>
                      <Slider
                        getAriaLabel={() => 'price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>  
                  </div>

                  <div className="mb-8 flex justify-between items-center">
                    <div className='mb-5'>
                      <h3 className='font-semibold text-gray-800 mb-2 capitalize'>
                        main price 
                      </h3>

                      <p className='text-gray-700 font-medium text-lg py-2 px-4 flex justify-center items-center border border-gray-300 rounded-full'>
                        <span className='mr-6'>
                          {`${value[0]}`} 
                        </span>

                        <span className='text-xl'>
                          $ 
                        </span>
                      </p>
                    </div>

                    <div className='mb-5'>
                      <h3 className='font-semibold text-gray-800 mb-2 capitalize'>
                        max price 
                      </h3>

                      <p className='text-gray-700 font-medium text-lg py-2 px-4 flex justify-center items-center border border-gray-300 rounded-full'>
                        <span className='mr-6'>
                          {`${value[1]}`} 
                        </span>

                        <span className='text-xl'>
                          $ 
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <a href="" className='font-semibold text-gray-800 capitalize py-2 px-4 border border-gray-300 rounded-full'>
                      clear
                    </a>

                    <a href="" className='font-semibold text-white bg-gray-800 capitalize py-2 px-4 border border-gray-300 rounded-full'>
                      apply
                    </a>
                  </div>             
                </div>
              </div>
            </div>
          </div>     
        </div>

      </header>
    </main>
  )
}

export default Product