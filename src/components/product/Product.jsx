import React, { useState } from 'react'
import ProductFilter from './productFilter'

function Product() {
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

          <ProductFilter />

    
        </div>
      </header>
    </main>
  )
}

export default Product