import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import ProductFilter from './productFilter'

function Product() {
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProduct(res.data))
  }, []);

  const handleColor = (e) => {
    setColor(e.target.value);
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

          <div className="">
            <ProductFilter />
          </div>        
        </div>
      </header>

      <section className='py-8 sm:py-12 md:py-24'>
        <div className="container">
          <div className=" grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="relative w-full h-72 p-4 bg-gray-100 rounded-3xl overflow-hidden group">
                  <img 
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />

                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-center space-x-2 translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                    <a href="#" type="butoon" className="py-2 px-4 rounded-full bg-gray-900  flex items-center justify-center space-x-2 hover:bg-opacity-90">
                      <span className="w-4 h-4">
                        <img 
                          src="./img/icons/shopping-basket.svg" 
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-contain img-white" 
                        />
                      </span>

                      <span className="text-base leading-none text-gray-50">
                        add to cart
                      </span>
                    </a> 

                    <Link to={'/'} className="py-2 px-4 rounded-full bg-gray-400  flex items-center justify-center space-x-2 hover:bg-opacity-90">
                      <span className="w-4 h-4">
                        <img 
                          src="./img/icons/full-screen.svg" 
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-contain img-white" 
                        />
                      </span>

                      <span className="text-base leading-none text-gray-50">
                        full view
                      </span>
                    </Link> 
                  </div> 
                </div>

                <div className="py-6 px-4">
                  <form action="" className="w-full mb-6">
                    <div className="flex items-center space-x-2">
                      <input onChange={handleColor} type="radio" name="color" value={'red'} id={`red${item.id}`} className="w-0 hidden relative radio-check" />
                      <label htmlFor={`red${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-red-400 label-check after:border-red-400"></label>

                      <input onChange={handleColor} type="radio" name="color" value={'blue'} id={`blue${item.id}`} disabled className="w-0 hidden relative radio-check" />
                      <label htmlFor={`blue${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-blue-400 label-check after:border-blue-400"></label>

                      <input onChange={handleColor} type="radio" name="color" value={'yellow'} id={`yellow${item.id}`} className="w-0 hidden relative radio-check" />
                      <label htmlFor={`yellow${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-yellow-400 label-check after:border-yellow-400"></label>

                      <input onChange={handleColor} type="radio" name="color" value={'green'} id={`green${item.id}`} className="w-0 hidden relative radio-check" />
                      <label htmlFor={`green${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-green-400 label-check after:border-green-400"></label>
                    </div>
                  </form>

                  <h2 className="text-xl font-medium text-gray-900 mb-2 capitalize text-ellipsis whitespace-nowrap overflow-hidden">
                    {item.title}
                  </h2>

                  <h3 className="text-lg font-normal text-gray-500 mb-3 capitalize">
                    {item.category}
                  </h3>

                  <div className="flex justify-between items-end ">
                    <div className="py-1 px-3 border-2 border-green-500 rounded-md">
                      <h4 className="text-green-500 font-semibold text-lg leading-none">
                        {item.price}$
                      </h4>
                    </div>

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
                        {item.rating.rate} ({item.rating.count})
                      </span>
                    </div>
                  </div>
                </div>
              </div>                
              )
            })}
          </div>           
        </div>
      </section>
    </main>
  )
}

export default Product