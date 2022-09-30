import React from 'react'
import { useSelector } from 'react-redux'
import CardList from '../../components/card'

const Wishlist = () => {

  const {wishListItems} = useSelector(state => state.wish)

  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <h1 className='text-xl font-semibold text-gray-900 first-letter:capitalize mb-8 sm:text-2xl md:text-4xl'>
          list of saved products
        </h1>
        {wishListItems.length > 0 ?
        <div className="grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          { wishListItems.map((item) => {
          return (
            <div key={item.id}>
              <CardList item={item} saved={true} />  
            </div> 
            )
          })}
        </div>:

        <div className="w-full py-10 bg-slate-50 rounded-3xl flex flex-col justify-center items-center md:py-28">
          <img 
            src="/img/icons/shopping-basket.svg" 
            alt="" 
            loading='lazy'
            className='w-20 h-20 object-contain opacity-40 mb-10 md:w-40 md:h-40'
          />

          <p className='text-slate-500 text-xl md:text-3xl'>
            Wishlist is empty
          </p>
        </div>
        }
      </div>
    </section>
  )
}

export default Wishlist