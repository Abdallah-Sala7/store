import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}

function ProductFilter({ handleFilter }) {
  const [mobileFilter, setMobileFilter] = useState(false);

  const [openRange, setOpenRange] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openSize, setOpenSize] = useState(false)
  const [openCat, setOpenCat] = useState(false)
  const [openSort, setOpenSort] = useState(false)

  const [value, setValue] = useState([0, 100])
  const [catValue, setCatValue] = useState([])
  const [colorValue, setColorValue] = useState([])
  const [sizeValue, setSizeValue] = useState([])
  const [sortValue, setSortValue] = useState('')

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

  const handleOpenSort = (e) => {
    e.preventDefault()
    setOpenSort(!openSort)
  }

  const handleMobileFilter = (e) => {
    e.preventDefault()
    setMobileFilter(!mobileFilter)
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
      handleFilter(e.target.value, value, sortValue)
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

  const addSize = (e) =>{
    let x = false;

    for (let i = 0; i < sizeValue.length; i++) {
      if (sizeValue[i] === e.target.value) {
        sizeValue.splice(i,1)
        x = true;
      }
    }

    if (!x) {
      setSizeValue([...sizeValue, e.target.value])
    }
  }

  const addSort = (e) =>{
    setSortValue(e.target.value)

    handleFilter(catValue, value, e.target.value)
  }

  return (
    <>
    <div className={`fixed inset-0 z-50 remove-scrollbar bg-white w-full h-full justify-between items-center flex-wrap md:flex-nowrap md:static ${mobileFilter ? 'flex overflow-y-auto' : 'hidden'} md:overflow-visible md:flex`}>
      <div className="fixed top-0 left-0 z-10 w-full px-8 py-4 bg-slate-50 md:hidden">
        <a href="#" onClick={handleMobileFilter} className='absolute top-1/2 left-5 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-gray-100 hover:bg-opacity-75'>
          <img 
            src="./img/icons/xmark.svg" 
            alt=""
            loading='lazy'
            className='w-6 h-6 object-contain opacity-60'
          />
        </a>

        <h1 className='text-xl font-medium capitalize text-center text-slate-800'>
          product filter
        </h1>
      </div>

      <div className="flex items-center flex-wrap pt-16 md:pt-0 md:gap-5">
        <div className={`relative w-full md:w-fit  ${openRange ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenRange} className={` hidden w-36 items-center justify-between py-2 px-4 border  rounded-full ${value[0] == 0 && value[1] == 100 ? 'border-gray-300' : 'bg-blue-50 border-blue-300'} md:flex `}>
            <img
              src='./img/icons/filter/dollar-sign-solid.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain opacity-60 '
            />

            <span className='text-gray-500'>
              {`${value[0]}$`} - {`${value[1]}$`}
            </span>
          </a>

          <div className={`static top-14 left-0 z-20 w-full pt-10 bg-white overflow-hidden transition duration-500 border-b border-gray-100 md:rounded-2xl md:w-96 md:shadow-2xl ${openRange ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-5'} md:absolute `}>
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

            <div className="hidden w-full justify-between items-center p-8 bg-slate-100 md:flex">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenRange} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenRange} className={`fixed inset-0 z-10 hidden ${openRange ? 'md:block' : ''}`}></div>
        </div>

        <div className={`relative w-full md:w-fit ${openCat ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenCat} className={`hidden items-center justify-center py-2 px-4 rounded-full border ${catValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'} md:flex`}>
            <img
              src='./img/icons/filter/document-text-outline.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain opacity-60 mr-3'
            />

            <span className='text-gray-700 capitalize'>
              categories
            </span>
          </a>

          <div className={`static top-14 left-0 z-20 w-full pt-10 bg-white overflow-hidden transition duration-500 border-b border-gray-100 md:w-96 md:rounded-2xl md:shadow-2xl  ${openCat ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-5'} md:absolute`}>
            <h2 className='text-xl pl-8 font-medium capitalize text-gray-900 mb-5 whitespace-nowrap md:hidden'>
              categories
            </h2>

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
                  id="men's clothing" 
                  value={"men's clothing"} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="men's clothing" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  men's clothing
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="jewelery" 
                  value={'jewelery'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="jewelery" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  jewelery
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="electronics" 
                  value={'electronics'} 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="electronics" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  electronics
                </label>
              </li>

              <li className='flex items-center'>
                <input 
                  type="checkbox" 
                  name="cat" 
                  id="women's clothing" 
                  value="women's clothing" 
                  onChange={addCat}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="women's clothing" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                  women's clothing
                </label>
              </li>    
            </ul>                   

            <div className="w-full hidden justify-between items-center p-8 bg-slate-100 md:flex">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenCat} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenCat} className={`hidden fixed inset-0 z-10 ${openCat? 'md:block' : ''}`}></div>
        </div>

        <div className={`relative w-full md:w-fit ${openColor ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenColor} className={`hidden items-center justify-center py-2 px-4 rounded-full border ${colorValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'} md:flex`}>
            <img
              src='./img/icons/filter/color-fill-outline.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain opacity-60 mr-3'
            />

            <span className='text-gray-700 capitalize'>
              colors
            </span>
          </a>

          <div className={`static top-14 left-0 z-20 w-full pt-10 bg-white overflow-hidden transition duration-500 border-b border-gray-100 md:w-96 md:rounded-2xl md:shadow-2xl  ${openColor ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-5'} md:absolute`}>
            <h2 className='text-xl pl-8 font-medium capitalize text-gray-900 mb-5 whitespace-nowrap md:hidden'>
              colors
            </h2>

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

            <div className="w-full hidden justify-between items-center p-8 bg-slate-100 md:flex">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenColor} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenColor} className={`inset-0 z-10 hidden fixed ${openColor ? 'md:block' : ''}`}></div>
        </div>

        <div className={`relative w-full md:w-fit ${openSize ? '' : 'overflow-hidden'}`}>
          <a href="#" onClick={handleOpenSize} className={` hidden items-center justify-center py-2 px-4 rounded-full border md:flex ${sizeValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'} `}>
            <img
              src='./img/icons/filter/resize-outline.svg'
              alt='filter price'
              loading='lazy'
              className='w-4 h-4 object-contain opacity-60 mr-3'
            />

            <span className='text-gray-700 capitalize'>
              size
            </span>
          </a>

          <div className={`static top-14 right-0 z-20 w-full pt-10 bg-white overflow-hidden transition duration-500 border-b border-gray-100 md:w-96 md:rounded-2xl md:shadow-2xl md:absolute  ${openSize ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-5'}`}>
            <h2 className='text-xl pl-8 font-medium capitalize text-gray-900 mb-5 whitespace-nowrap md:hidden'>
              size
            </h2>

            <ul className="px-8 mb-10">
              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="size" 
                  id="xs" 
                  value={'xs'} 
                  onChange={addSize}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="xs" className='text-gray-600 text-xl flex-1 uppercase cursor-pointer'>
                  xs
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="size" 
                  id="s" 
                  value={'s'} 
                  onChange={addSize}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="s" className='text-gray-600 text-xl flex-1 uppercase cursor-pointer'>
                  s
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="size" 
                  id="m" 
                  value={'m'} 
                  onChange={addSize}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="m" className='text-gray-600 text-xl flex-1 uppercase cursor-pointer'>
                  m
                </label>
              </li>

              <li className='flex items-center mb-4'>
                <input 
                  type="checkbox" 
                  name="size" 
                  id="l" 
                  value={'l'} 
                  onChange={addSize}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="l" className='text-gray-600 text-xl flex-1 uppercase cursor-pointer'>
                  l
                </label>
              </li>

              <li className='flex items-center'>
                <input 
                  type="checkbox" 
                  name="size" 
                  id="xl" 
                  value={'xl'} 
                  onChange={addSize}
                  className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
                />

                <label htmlFor="xl" className='text-gray-600 text-xl flex-1 uppercase cursor-pointer'>
                  xl
                </label>
              </li>    
            </ul>                   

            <div className="w-full hidden justify-between items-center p-8 bg-slate-100 md:flex">
              <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
                clear
              </button>

              <button onClick={handleOpenSize} className='custom-btn capitalize py-2 px-6'>
                apply
              </button>
            </div>             
          </div>

          <div onClick={handleOpenSize} className={`fixed inset-0 z-10 hidden ${openSize? 'md:block' : ''}`}></div>
        </div>
      </div>

      <div className={`relative w-full pb-20 md:pb-0 md:w-fit ${openSort ? '' : 'overflow-hidden'}`}>
        <a href="#" onClick={handleOpenSort} className={`hidden items-center justify-center py-2 px-4 rounded-full border md:flex ${sortValue.length > 0 ? 'bg-blue-50 border-blue-300':'border-gray-300'}`}>
          <img
            src='./img/icons/filter/swap-vertical-outline.svg'
            alt='filter price'
            loading='lazy'
            className='w-4 h-4 object-contain opacity-60 mr-3'
          />

          <span className='text-gray-700 capitalize'>
            sort
          </span>
        </a>

        <div className={`static top-14 right-0 z-20 w-full pt-10 bg-white overflow-hidden transition duration-500 md:rounded-2xl md:shadow-2xl md:absolute md:w-96  ${openSort ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-5'}`}>
          <h2 className='text-xl pl-8 font-medium capitalize text-gray-900 mb-5 whitespace-nowrap md:hidden'>
            sort order
          </h2>

          <ul className="px-8 mb-10">
            <li className='flex items-center pb-5 mb-4 border-b border-gray-200'>
              <input 
                type="radio" 
                name="sort" 
                id="popular" 
                value={'popular'} 
                onChange={addSort}
                className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
              />

              <label htmlFor="popular" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                most popular
              </label>
            </li>

            <li className='flex items-center mb-4'>
              <input 
                type="radio" 
                name="sort" 
                id="rating" 
                value={'rating'} 
                onChange={addSort}
                className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
              />

              <label htmlFor="rating" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                best rating
              </label>
            </li>

            <li className='flex items-center mb-4'>
              <input 
                type="radio" 
                name="sort" 
                id="newest" 
                value={'newest'} 
                onChange={addSort}
                className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
              />

              <label htmlFor="newest" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                newest
              </label>
            </li>

            <li className='flex items-center mb-4'>
              <input 
                type="radio" 
                name="sort" 
                id="low" 
                value={'low'} 
                onChange={addSort}
                className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
              />

              <label htmlFor="low" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                price low - hight
              </label>
            </li>

            <li className='flex items-center'>
              <input 
                type="radio" 
                name="sort" 
                id="hight" 
                value={'hight'} 
                onChange={addSort}
                className="w-6 h-6 mr-5 rounded-lg !border-purple-600 focus:ring-0 foucs:!shadow-none !outline-purple-600 checked:bg-purple-900 "
              />

              <label htmlFor="hight" className='text-gray-600 text-xl flex-1 capitalize cursor-pointer'>
                price hight - low
              </label>
            </li>    
          </ul>                   

          <div className="w-full hidden justify-between items-center p-8 bg-slate-100 md:flex">
            <button className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
              clear
            </button>

            <button onClick={handleOpenSort} className='custom-btn capitalize py-2 px-6'>
              apply
            </button>
          </div>             
        </div>

        <div onClick={handleOpenSort} className={`fixed inset-0 z-10 hidden ${openSort? 'md:block' : ''}`}></div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-slate-50 md:hidden">
        <button onClick={handleMobileFilter} className='custom-btn capitalize py-2 px-6 text-gray-900 hover:text-white after:w-0 before:w-0 hover:after:w-3/5 hover:before:w-3/5 '>
          clear
        </button>

        <button onClick={handleMobileFilter} className='custom-btn capitalize py-2 px-6'>
          apply
        </button>
      </div> 
    </div>

    <a href="#" onClick={handleMobileFilter} className={`flex items-center justify-center py-2 px-4 rounded-full border ${value[0] == 0 && value[1] == 100 ? 'border-gray-300' : 'bg-blue-50 border-blue-300'} md:hidden`}>
      <img
        src='./img/icons/filter/sliders-solid.svg'
        alt='filter price'
        loading='lazy'
        className='w-4 h-4 object-contain opacity-60 mr-3'
      />

      <span className='text-gray-700 capitalize'>
        product filter
      </span>
    </a>
    </>
  )
}

export default ProductFilter