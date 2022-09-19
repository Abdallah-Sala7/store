import React, { useState, useEffect } from 'react'
import axios from "axios";

import ProductFilter from './productFilter'
import CardList from '../global/card';
import Loading from '../global/loading';

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setProduct(res.data)
      setLoading(true)
    })
  }, []);


  return (
    <main>
      <header className='pt-48 pb-10'>
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
          {loading ?
            <div className="grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            { product.map((item) => {
              return (
                <CardList id={item.id} image={item.image} title={item.title} price={item.price} category={item.category} rating={item.rating} />                
                )
              })}
            </div>
            : <Loading />
          }         
        </div>
      </section>
    </main>
  )
}

export default Product