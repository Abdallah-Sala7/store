import { Accordion } from 'flowbite-react';
import React, { useState } from 'react'

function Details() {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleColor = (e) => {
    setColor(e.target.value);
  }

  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const decrementQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  }

  const incrementQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  }
  return (
    <section className='py-8 sm:py-12 md:py-24'>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap md:space-x-8">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="w-full mb-5 rounded-lg overflow-hidden">
              <img
                src='./img/detail1.jpg'
                alt='feature1'
                loading='lazy'
                className='w-full object-contain'
              />
            </div>

            <div className="w-full flex justify-between space-x-2">
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src='./img/detail1.jpg'
                  alt='feature2'
                  loading='lazy'
                  className='w-full object-contain'
                />
              </div>

              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src='./img/detail1.jpg'
                  alt='feature3'
                  loading='lazy'
                  className='w-full object-contain'
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h1 className='text-2xl mb-2 text-gray-700 font-semibold md:text-3xl'>
              Heavy Weight Shoes
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="py-1 px-3 border-2 border-green-500 rounded-md">
                <h2 className="text-green-500 font-medium text-lg leading-none">
                  200$
                </h2>
              </div>

              <span className='text-gray-200 text-3xl font-thin'>|</span>

              <div className="flex items-center  space-x-3 ">
                <span className="w-5 h-5">
                  <img 
                    src="./img/icons/star.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />
                </span>

                <span className="text-sm text-gray-500 font-medium">
                  2.5 (2000)
                </span>
              </div>
            </div>

            <h3 className='text-sm mb-5 font-semibold capitalize'>
              color: <span className='font-bold text-base'>{color}</span>
            </h3>

            <form action="" className="w-full mb-6">
              <div className="flex items-center gap-4">
                <input onChange={handleColor} type="radio" name="color" value={'red'} id={`red`} className="w-0 hidden relative radio-check" />
                <label htmlFor={`red`} className="w-8 h-8 rounded-full cursor-pointer bg-red-400 label-check after:border-red-400"></label>

                <input onChange={handleColor} type="radio" name="color" value={'blue'} id={`blue`} disabled className="w-0 hidden relative radio-check" />
                <label htmlFor={`blue`} className="w-8 h-8 rounded-full bg-blue-400 label-check after:border-blue-400"></label>

                <input onChange={handleColor} type="radio" name="color" value={'yellow'} id={`yellow`} className="w-0 hidden relative radio-check" />
                <label htmlFor={`yellow`} className="w-8 h-8 rounded-full cursor-pointer bg-yellow-400 label-check after:border-yellow-400"></label>

                <input onChange={handleColor} type="radio" name="color" value={'green'} id={`green`} className="w-0 hidden relative radio-check" />
                <label htmlFor={`green`} className="w-8 h-8 rounded-full cursor-pointer bg-green-400 label-check after:border-green-400"></label>
              </div>
            </form>

            <h4 className='text-sm mb-5 font-semibold capitalize'>
              size: <span className='font-bold text-base'>{size}</span>
            </h4>

            <form action="" className="w-full mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <input onChange={handleSize} type="radio" name="size" value={'s'} id={`s`} className="w-0 hidden relative size-check" />
                <label htmlFor={`s`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">s</label>

                <input onChange={handleSize} type="radio" name="size" value={'m'} id={`m`} className="w-0 hidden relative size-check" />
                <label htmlFor={`m`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">m</label>

                <input onChange={handleSize} type="radio" name="size" value={'l'} id={`l`} className="w-0 hidden relative size-check" />
                <label htmlFor={`l`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">l</label>

                <input onChange={handleSize} type="radio" name="size" value={'xl'} id={`xl`} className="w-0 hidden relative size-check" />
                <label htmlFor={`xl`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">xl</label>

                <input onChange={handleSize} type="radio" name="size" value={'2xl'} id={`2xl`} className="w-0 hidden relative size-check" />
                <label htmlFor={`2xl`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">2xl</label>

                <input onChange={handleSize} type="radio" name="size" value={'3xl'} id={`3xl`} className="w-0 hidden relative size-check" />
                <label htmlFor={`3xl`} className="px-5 py-2 rounded-xl cursor-pointer border border-gray-100 uppercase text-gray-500 text-lg">3xl</label>
              </div>
            </form>

            <div className="flex justify-between items-center flex-wrap mb-6">
              <div className="w-full mb-5 py-3 px-6 bg-slate-300 text-lg font-medium rounded-full flex justify-between items-center sm:mb-0 sm:w-1/3">
                <a onClick={decrementQuantity} href='#'  className="text-gray-500 px-3 border border-gray-500 rounded-md text-xl cursor-pointer">-</a>
                <span className="text-gray-600 text-lg">{quantity}</span>
                <a onClick={incrementQuantity} href='#' className="text-gray-500 px-3 border border-gray-500 rounded-md text-xl cursor-pointer">+</a>
              </div>

              <a href='#' className="w-full py-3 px-6 bg-gray-900 text-center text-white text-lg font-medium rounded-full first-letter:capitalize sm:w-3/5">
                add to cart
              </a>
            </div>

            <div className="w-full mb-6">
              <Accordion flush={true}>
                <Accordion.Panel>
                  <Accordion.Title>
                    discription
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                     Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title>
                    discription
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                     Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title>
                    discription
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                     Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details