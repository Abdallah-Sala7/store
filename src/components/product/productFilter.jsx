import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}

function ProductFilter() {
  const [openRange, setOpenRange] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openSize, setOpenSize] = useState(false)
  const [openCat, setOpenCat] = useState(false)

  const [value, setValue] = useState([0, 100])
  const [catValue, setCatValue] = useState([])
  const [colorValue, setColorValue] = useState([])
  const [sizeValue, setSizeValue] = useState([])

  

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

  const addCat = (e) =>{
    let x = false;

    for (let i = 0; i < catValue.length; i++) {
      if (catValue[i] === e.target.value) {
        catValue.splice(i,1)
        x = true;
      }
    }

    if (!x) {
      setCatValue([...catValue, e.target.value])
    }
  }

  const addColor = (e) =>{
    let x = false;

    for (let i = 0; i < colorValue.length; i++) {
      if (colorValue[i] === e.target.value) {
        colorValue.splice(i,1)
        x = true;
      }
    }

    if (!x) {
      setColorValue([...colorValue, e.target.value])
    }
  }

  return (
    <div className="hidden justify-between items-center md:flex ">
      {console.log('cat value is :' + catValue)}
      {console.log('color value is :' + colorValue)}
      <div className="flex items-center gap-5">
        <div className={`relative ${openRange ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenRange} className={`w-36 flex items-center justify-between py-2 px-4 border  rounded-full ${value[0] == 0 && value[1] == 100 ? 'border-gray-300' : 'bg-blue-50 border-blue-300'}`}>
            <img
              src='./img/icons/filter/dollar-sign-solid.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain'
            />

            <span className='text-gray-500'>
              {`${value[0]}$`} - {`${value[1]}$`}
            </span>
          </a>

          <div className={`absolute z-20 top-14 left-0 w-96 pt-10 bg-white rounded-2xl overflow-hidden shadow-2xl transition duration-500  ${openRange ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="px-8 mb-10">
              <h2 className='text-xl font-medium first-letter:capitalize text-gray-900 mb-5 whitespace-nowrap'>
                price range
              </h2>

              <div className="w-full mb-8">
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

              <div className=" flex justify-between items-center">
                <div>
                  <h3 className='font-semibold text-gray-800 mb-4 capitalize'>
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

                <div>
                  <h3 className='font-semibold text-gray-800 mb-4 capitalize'>
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
            </div>

            <div className="w-full flex justify-between items-center p-8 bg-slate-100">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenRange} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenRange} className={`fixed inset-0 z-10 ${openRange ? '' : 'hidden'}`}></div>
        </div>

        <div className={`relative ${openCat ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenCat} className={`flex items-center justify-center py-2 px-4 rounded-full border ${catValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'}`}>
            <img
              src='./img/icons/filter/dollar-sign-solid.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain mr-3'
            />

            <span className='text-gray-700 capitalize'>
              categories
            </span>
          </a>

          <div className={`absolute top-14 left-0 z-20 w-96 pt-10 bg-white rounded-2xl overflow-hidden shadow-2xl transition duration-500  ${openCat ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <ul className="px-8 mb-10">
              <li className='flex items-center pb-5 mb-4 border-b border-gray-200'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="all" 
                  value={'all'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="all" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  all cat
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="new" 
                  value={'new'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="new" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  new arrivals
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="sale" 
                  value={'sale'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="sale" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  sale
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="backpacks" 
                  value={'backpacks'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="backpacks" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  backpacks
                </label>
              </li>

              <li className='flex items-center'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="travel" 
                  value={'travel'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="travel" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  travel bags
                </label>
              </li>    
            </ul>                   

            <div className="w-full flex justify-between items-center p-8 bg-slate-100">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenCat} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenCat} className={`fixed inset-0 z-10 ${openCat? '' : 'hidden'}`}></div>
        </div>

        <div className={`relative ${openColor ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenColor} className={`flex items-center justify-center py-2 px-4 rounded-full border ${colorValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'}`}>
            <img
              src='./img/icons/filter/dollar-sign-solid.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain mr-3'
            />

            <span className='text-gray-700 capitalize'>
              colors
            </span>
          </a>

          <div className={`absolute top-14 left-0 z-20 w-96 pt-10 bg-white rounded-2xl overflow-hidden shadow-2xl transition duration-500  ${openColor ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <ul className="px-8 mb-10">
              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="color" 
                  id="red" 
                  value={'red'}
                  onChange={addColor}
                  className="w-6 h-6 mr-5 rounded-lg !border-red-600 focus:ring-0 foucs:!shadow-none !outline-red-600 checked:bg-red-600 "
                />

                <label htmlFor="red" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  red
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="color" 
                  id="blue" 
                  value={'blue'} 
                  onChange={addColor}
                  className="w-6 h-6 mr-5 rounded-lg !border-blue-600 focus:ring-0 foucs:!shadow-none !outline-blue-600 checked:bg-blue-600 "
                />

                <label htmlFor="blue" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  blue
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="color" 
                  id="purple" 
                  value={'purple'} 
                  onChange={addColor}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-600 "
                />

                <label htmlFor="purple" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  purple
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="color" 
                  id="green" 
                  value={'green'} 
                  onChange={addColor}
                  className="w-6 h-6 mr-5 rounded-lg !border-green-600 focus:ring-0 foucs:!shadow-none !outline-green-600 checked:bg-green-600 "
                />

                <label htmlFor="green" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  green
                </label>
              </li>

              <li className='flex items-center'>
                <input 
                  type="checkbox" 
                  name="color" 
                  id="yellow" 
                  value={'yellow'} 
                  onChange={addColor}
                  className="w-6 h-6 mr-5 rounded-lg !border-yellow-300 focus:ring-0 foucs:!shadow-none !outline-yellow-300 checked:bg-yellow-300 "
                />

                <label htmlFor="yellow" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  yellow
                </label>
              </li>    
            </ul> 

            <div className="w-full flex justify-between items-center p-8 bg-slate-100">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenColor} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenColor} className={`fixed inset-0 z-10 ${openColor ? '' : 'hidden'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter