import React from 'react'

const ChangeBilling = () => {
  return (
    <section className='py-8 sm:py-12 md:py-24 lg:px-40'>
      <div className="container">
        <h1 className='font-bold text-3xl text-gray-900 capitalize mb-8 sm:text-5xl'>
          Payments & payouts
        </h1>

        <div className="w-full max-w-2xl">
          <p className='text-gray-600 text-lg mb-5 leading-8'>
            When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.
          </p>

          <p className='text-gray-600 text-lg mb-5 leading-8'>
            When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.
          </p>

          <a href="#" className="custom-btn">
            add payout method
          </a>
        </div>
      </div>
    </section>
  )
}

export default ChangeBilling