import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Header() {
  return (
    <header className='w-full bg-primary-100 relative z-10'>
      <div className="container h-full pt-40 flex flex-col items-center justify-between md:flex-row">
        <div className='w-full pb-5 md:w-1/2'>
          <h1 className='font-semibold text-2xl text-gray-500 opacity-80 mb-8 first-letter:capitalize'>
            In this season, find the best
          </h1>

          <h2 className=' font-bold text-4xl text-gray-900 capitalize mb-8 sm:text-6xl'>
            Exclusive collection for everyone
          </h2>

          <a href="#" className='custom-btn'>
            <span>
              Shop now
            </span>
          </a>      
        </div>

        <div className=' w-full h-full md:w-1/2'>
        <Swiper
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src='./img/hero-right-3.png'
              alt=''
              loading='lazy'
              className='w-full h-full object-contain object-bottom'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src='./img/hero-right-2.png'
              alt=''
              loading='lazy'
              className='w-full h-full object-contain object-bottom'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src='./img/hero-right-3.png'
              alt=''
              loading='lazy'
              className='w-full h-full object-contain object-bottom'
            />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>

      <div className="overlay absolute inset-3 -z-10"></div>
    </header>
  )
}

export default Header