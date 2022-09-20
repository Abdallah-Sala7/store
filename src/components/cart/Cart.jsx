import React from 'react'
import { Breadcrumb } from 'flowbite-react'
import { Link } from 'react-router-dom'

import { removeFromCart,addToCart } from '../store/reducers/cartSlice'
import { useSelector,useDispatch } from 'react-redux'

function Cart() {
  const dispatch = useDispatch();
  const {cartItems, totalAmount, totalPrice} = useSelector(state => state.cart)

  const [count, setCount] = React.useState(0)

  const increment = (e) => {
    e.preventDefault()
    setCount(count + 1)
  }

  const decrement = (e) => {
    e.preventDefault()
    setCount(count - 1)
  }

  return (
    <main>
      {console.log(cartItems)}
      <header className='pt-40'>
        <div className="container">
          <div className="border-b border-gray-300 pb-8 sm:pb-12 md:pb-20">
            <h1 className='text-2xl font-bold mb-6 capitalize md:text-4xl'>
              shopping cart
            </h1>

            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item>
                <Link to={'/'} className='text-gray-700 font-semibold'>Home</Link>
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                <Link to={'/product'} className='text-gray-700 font-semibold'>Product</Link>
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                Flowbite React
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </header>

      <section className='py-5 mb:py-10'>
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full flex flex-col flex-wrap divide-y divide-gray-100 pb-5 border-b border-gray-300 md:pb-0 md:border-b-0 md:px-5 md:border-r md:w-2/3">
              {cartItems.map(item =>{
                return( 
                  <div key={item.id} className="w-full flex py-4">
                    <div className="w-28 rounded-2xl overflow-hidden mr-3 shrink-0 sm:mr-5 md:w-40">
                      <img 
                        src={item.image}
                        alt=""
                        loading='lazy'
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <div className="grow">
                      <h1 className='text-gray-800 mb-3 text-lg font-semibold capitalize'>
                        {item.title}
                      </h1>

                      <div className="flex items-center gap-5 divide-x mb-3">
                        <div className="flex items-center gap-2">
                          <img 
                            src="./img/icons/filter/color-fill-outline.svg" 
                            alt=""
                            loading='lazy'
                            className='w-4 h-4 object-contain opacity-70' 
                          />

                          <span className='text-sm capitalize text-gray-600'>
                            red
                          </span>
                        </div>

                        <div className="flex items-center gap-2 pl-5">
                          <img 
                            src="./img/icons/filter/resize-outline.svg" 
                            alt=""
                            loading='lazy'
                            className='w-4 h-4 object-contain opacity-70' 
                          />

                          <span className='text-sm uppercase text-gray-600'>
                            2xl
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-y-3 mb-5">
                        <div className="flex items-center gap-3">
                          <button onClick={()=> dispatch(addToCart(item))} className="w-8 h-8">
                            <img 
                              src="./img/icons/add-circle-outline.svg" 
                              alt=""
                              loading='lazy'
                              className='w-full h-full object-contain opacity-50' 
                            />
                          </button>

                          <span className="text-gray-600 text-lg">{item.cartQuantity}</span>

                          <button onClick={()=> dispatch(removeFromCart(item.id))} className="w-8 h-8">
                            <img 
                              src="./img/icons/remove-circle-outline.svg" 
                              alt=""
                              loading='lazy'
                              className='w-full h-full object-contain opacity-50' 
                            />
                          </button>
                        </div>

                        <div className="py-1 px-3 border-2 border-green-500 rounded-md">
                          <h3 className="text-green-500 font-medium text-lg leading-none">
                            {item.price}$
                          </h3>
                        </div>
                      </div>

                      <div className="flex justify-between items-center flex-wrap gap-y-3">
                        <div className="w-fit py-1 px-3 border border-gray-300 rounded-full flex items-center">
                          <img 
                            src="./img/icons/check-solid.svg" 
                            alt=""
                            loading='lazy'
                            className='w-4 h-4 object-contain mr-2 opacity-50' 
                          />

                          <span className='text-gray-500'>
                            in stuck
                          </span>
                        </div>

                        <button onClick={()=> dispatch(removeFromCart(item.id))} className='text-lg capitalize text-red-300 transition hover:text-red-600'>remove</button>
                      </div>
                    </div>
                  </div>
                )}
              )}

            </div>

            <div className="sticky top-40 w-full pt-5 md:pb-0 md:px-5 md:w-1/3">
              <h2 className='text-gray-900 font-semibold text-lg capitalize mb-5'>
                Order Summary
              </h2>

              <div className="py-3 flex justify-between items-center border-b border-gray-300">
                <p className='capitalize text-gray-400'>
                  Subtotal
                </p>

                <p className='text-gray-800 font-semibold'>
                  200$
                </p>
              </div>

              <div className="py-3 flex justify-between items-center border-b border-gray-300">
                <p className='capitalize text-gray-400'>
                  Shpping estimate
                </p>

                <p className='text-gray-800 font-semibold'>
                  200$
                </p>
              </div>

              <div className="py-3 flex justify-between items-center border-b border-gray-300">
                <p className='capitalize text-gray-400'>
                  Tax estimate
                </p>

                <p className='text-gray-800 font-semibold'>
                  200$
                </p>
              </div>

              <div className="py-3 flex justify-between items-center">
                <h3 className='text-gray-900 font-semibold capitalize mb-5'>
                  order total
                </h3>

                <p className='text-gray-800 font-semibold'>
                  500$
                </p>
              </div>

              <button className='w-full custom-btn justify-center capitalize text-xl'>
                checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart