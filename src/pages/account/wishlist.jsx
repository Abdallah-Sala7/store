import React from 'react'
import { useSelector } from 'react-redux'
import CardList from '../../components/card'

const Wishlist = () => {

  const {wishListItems} = useSelector(state => state.wish)

  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <div className="grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          { wishListItems.map((item) => {
          return (
            <div key={item.id}>
              <CardList item={item} saved={true} />  
            </div> 
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Wishlist