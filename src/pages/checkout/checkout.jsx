import React, { useState } from 'react'
import { Breadcrumb } from 'flowbite-react'
import { Link } from 'react-router-dom'

import { removeFromCart, addToCart, removeProduct } from '../../store/reducers/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import CheckoutAccordion from '../../components/CheckoutAccordion'

const Checkout = () => {
  const dispatch = useDispatch();
  const {cartItems, totalPrice} = useSelector(state => state.cart)

  const [activeAccordionList, setActiveAccordionList] = useState({
    shipping: false,
    payment: false,
    info: true
  });
  
  return (
    <main>
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
                Checkout
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </header>

      <section className='py-5 mb:py-10'>
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full pb-5 lg:pb-0 lg:px-5 lg:w-1/2">
              <CheckoutAccordion id={'maininfo'} isActive={activeAccordionList.info} img={"/img/icons/user-ci.svg"} title={'contact info'} info={'+201025077437'}>
                <div className="w-full">
                  <h1 className='font-medium  text-gray-700 capitalize mb-8 sm:text-2xl'>
                    contact informatiion
                  </h1>

                  <form action="" className='w-full'>
                    <div className="w-full mb-5">
                      <label htmlFor="name" className='text-gray-700 font-medium mb-2 block'>
                        Your phone number
                      </label>

                      <input 
                        type="text" 
                        id='phone' 
                        className='w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-gray-400 !ring-0' 
                      />
                    </div>

                    <div className="w-full mb-5">
                      <label htmlFor="name" className='text-gray-600 font-medium mb-2 block'>
                        Email address
                      </label>

                      <input 
                        type="text" 
                        id='email' 
                        className='w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-gray-400 !ring-0' 
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                      <input
                        type="checkbox"
                        id="save"
                        className='w-6 h-6 border border-gray-200 rounded-sm focus:outline-none'
                      />

                      <label htmlFor="save" className='text-gray-600 text-sm'>
                        Email me news and offers
                      </label>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                      <a href="#" onClick={(e)=>{e.preventDefault() ; setActiveAccordionList({shipping:true, info:false, payment:false})}} className='w-full py-2 px-5 bg-gray-900 text-gray-100 text-lg text-center rounded-full hover:bg-opacity-90 sm:w-fit'>
                        Save and next to shipping
                      </a>

                      <a href="#addres" className='w-full py-2 px-5 bg-gray-100 text-gray-900 text-lg text-center rounded-full bg-opacity-0 hover:bg-opacity-100 sm:w-fit'>
                        cancel
                      </a>
                    </div>
                  </form>
                </div>
              </CheckoutAccordion>

              <CheckoutAccordion id={'addres'} isActive={activeAccordionList.shipping} img={'/img/icons/location.svg'} title={'shipping addrees'} info={"St. Paul's Road, Norris, SD 57560, Dakota, USA"}>
                <div className="w-full">
                  <h1 className='font-medium text-gray-700 capitalize mb-8 sm:text-2xl'>
                    shipping address
                  </h1>

                  <form action="" className='w-full'>
                    <div className="w-full mb-5 flex flex-wrap gap-3 sm:flex-nowrap">
                      <div className="w-full sm:w-1/2">
                        <label htmlFor="first-name" className='text-gray-700 font-medium mb-2 block'>
                          First name
                        </label>

                        <input
                          type="text"
                          id='first-name'
                          defaultValue={'Abdallah'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>

                      <div className="w-full sm:w-1/2">
                        <label htmlFor="last-name" className='text-gray-700 font-medium mb-2 block'>
                          Last name
                        </label>

                        <input
                          type="text"
                          id='last-name'
                          defaultValue={'salah'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>
                    </div>

                    <div className="w-full mb-5 flex flex-wrap gap-3 sm:flex-nowrap">
                      <div className="w-full sm:w-2/3">
                        <label htmlFor="address" className='text-gray-700 font-medium mb-2 block'>
                          Address
                        </label>

                        <input
                          type="text"
                          id='address'
                          defaultValue={'123, Dream Avenue, USA'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>

                      <div className="w-full sm:w-2/6">
                        <label htmlFor="apt" className='text-gray-700 font-medium mb-2 block'>
                          Apt, Suite
                        </label>

                        <input
                          type="text"
                          id='apt'
                          defaultValue={'55U - DD5'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>
                    </div>

                    <div className="w-full mb-8 flex flex-wrap gap-3 sm:flex-nowrap">
                      <div className="w-full sm:w-2/3">
                        <label htmlFor="city" className='text-gray-700 font-medium mb-2 block'>
                          City
                        </label>

                        <input
                          type="text"
                          id='city'
                          defaultValue={'Norris'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>

                      <div className="w-full sm:w-2/6">
                        <label htmlFor="country" className='text-gray-700 font-medium mb-2 block'>
                          Country
                        </label>

                        <input
                          type="text"
                          id='country'
                          defaultValue={'united states'}
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>
                    </div>

                    <div className="w-full mb-8 flex flex-wrap gap-3 sm:flex-nowrap">
                      <div className="w-full flex items-center sm:w-2/3">
                        <input
                          type="radio"
                          name='delivery'
                          id='home'
                          defaultValue={'Norris'}
                          className='w-7 h-7 border border-gray-600 rounded-full focus:outline-none'
                        />  

                        <label htmlFor="home" className='text-gray-700 font-medium ml-2'>
                          Home
                        </label>               
                      </div>

                      <div className="w-full flex items-center sm:w-2/3">
                        <input
                          type="radio"
                          name='delivery'
                          id='office'
                          className='w-7 h-7 border border-gray-600 rounded-full focus:outline-none'
                        />  

                        <label htmlFor="office" className='text-gray-700 font-medium ml-2'>
                          Office
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                      <a href="#" onClick={(e)=>{e.preventDefault() ; setActiveAccordionList({shipping:false, info:false, payment:true})}} className='w-full py-2 px-5 bg-gray-900 text-gray-100 text-lg text-center rounded-full hover:bg-opacity-90 sm:w-fit'>
                        Save and next to payment
                      </a>

                      <a href="#" className='w-full py-2 px-5 bg-gray-100 text-gray-900 text-lg text-center rounded-full bg-opacity-0 hover:bg-opacity-100 sm:w-fit'>
                        cancel
                      </a>
                    </div>
                  </form>
                </div>
              </CheckoutAccordion>

              <CheckoutAccordion id={'payment'} isActive={activeAccordionList.payment} img={'/img/icons/cc-visa.svg'} title={'payment method'} info={"Google / Apple Walletxxx-xxx-xx55"}>
                <div className="w-full">
                  <h1 className='font-medium text-gray-700 capitalize mb-8 sm:text-2xl'>
                    debit / credit card
                  </h1>

                  <form action="" className='w-full'>
                    <div className="w-full mb-5">
                      <label htmlFor="card-number" className='text-gray-700 font-medium mb-2 block'>
                        Card number
                      </label>

                      <input
                        type="text"
                        id='card-number'
                        className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                      />                        
                    </div>

                    <div className="w-full mb-5">
                      <label htmlFor="card-name" className='text-gray-700 font-medium mb-2 block'>
                        Card name
                      </label>

                      <input
                        type="text"
                        id='card-name'
                        className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                      />                        
                    </div>

                    <div className="w-full mb-5 flex flex-wrap gap-3 sm:flex-nowrap">
                      <div className="w-full sm:w-2/3">
                        <label htmlFor="expiration" className='text-gray-700 font-medium mb-2 block'>
                          Expiration date (MM/YY)
                        </label>

                        <input
                          type="text"
                          id='expiration'
                          placeholder='MM/YY'
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>

                      <div className="w-full sm:w-2/6">
                        <label htmlFor="cvc" className='text-gray-700 font-medium mb-2 block'>
                          CVC
                        </label>

                        <input
                          type="text"
                          id='cvc'
                          placeholder='123'
                          className='w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400 !ring-0'
                        />                        
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                      <a href="#" className='w-full py-2 px-5 bg-gray-900 text-gray-100 text-lg text-center rounded-full hover:bg-opacity-90 sm:w-fit'>
                        confirm order
                      </a>

                      <a href="#" className='w-full py-2 px-5 bg-gray-100 text-gray-900 text-lg text-center rounded-full bg-opacity-0 hover:bg-opacity-100 sm:w-fit'>
                        cancel
                      </a>
                    </div>
                  </form>
                </div>
              </CheckoutAccordion>
            </div>

            <div className="w-full border-gray-300 lg:w-1/2 lg:px-8 lg:border-l">
              <div className="flex flex-col flex-wrap divide-y divide-gray-100 pb-5">
                {cartItems.map(item =>{
                  return( 
                    <div key={item.id} className="w-full flex flex-col items-center justify-center py-4 sm:flex-row sm:justify-between">
                      <div className="w-32 h-32 p-5 mb-5 flex justify-center items-center bg-slate-100 rounded-xl overflow-hidden shrink-0 sm:w-36 sm:h-36 sm:mr-5 sm:mb-0">
                        <img
                          src={item.image}
                          alt=""
                          loading='lazy'
                          className='w-full h-full object-contain'
                        />
                      </div>

                      <div className="grow w-full sm:w-auto">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <h1 className='text-gray-800 font-semibold capitalize line-clamp-1'>
                            {item.title}
                          </h1>

                          <h2 className="py-1 px-2 text-green-500 font-medium border-2 border-green-400 rounded-md leading-none">
                            {item.cartQuantity*item.price}$
                          </h2>                          
                        </div>

                        <div className="flex items-center gap-5 divide-x mb-8">
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

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <button onClick={()=> dispatch(addToCart({item, quant:1}))} className="w-8 h-8">
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
                          
                          <button onClick={() => dispatch(removeProduct(item.id))} className='text-lg capitalize text-red-300 transition hover:text-red-600'>remove</button>
                        </div>
                      </div>
                    </div>
                  )}
                  )}
              </div>

              <div className="border-t pt-5">
                <h3 className='text-gray-900 font-semibold text-lg capitalize mb-5'>
                  Order Summary
                </h3>

                <div className="py-3 flex justify-between items-center border-b border-gray-300">
                  <p className='capitalize text-gray-400'>
                    Subtotal
                  </p>

                  <p className='text-gray-800 font-semibold'>
                    {Math.floor(totalPrice)}$
                  </p>
                </div>

                <div className="py-3 flex justify-between items-center border-b border-gray-300">
                  <p className='capitalize text-gray-400'>
                    Shpping estimate
                  </p>

                  <p className='text-gray-800 font-semibold'>
                    50$
                  </p>
                </div>

                <div className="py-3 flex justify-between items-center border-b border-gray-300">
                  <p className='capitalize text-gray-400'>
                    Tax estimate
                  </p>

                  <p className='text-gray-800 font-semibold'>
                    3%
                  </p>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <h4 className='text-gray-900 font-semibold capitalize mb-5'>
                    order total
                  </h4>

                  <p className='text-gray-800 font-semibold'>
                    {(Math.floor(totalPrice) * 0.3) + Math.floor(totalPrice) + 50}$
                  </p>
                </div>

                <button className='w-full custom-btn justify-center capitalize text-xl'>
                  checkout
                </button>                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Checkout