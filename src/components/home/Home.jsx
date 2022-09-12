import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
              src='./img/hero/hero-right-3.webp'
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
              src='./img/hero/hero-right-3.webp'
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

    <section className=" py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold text-gray-900 first-letter:capitalize mb-8">
          <span>discover more.</span> 
          <span className="text-gray-600"> Good things are waiting for you</span> 
        </h1>

        <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="p-8 rounded-2xl bg-discover-100 relative z-10">
                <div className="w-1/2 flex flex-col">
                  <h2 className=" text-xl font-normal text-gray-600 mb-5">
                    Sale collection
                  </h2>

                  <h3 className="text-2xl font-semibold text-gray-700 capitalize mb-8">
                    up to 80% off retail
                  </h3>

                  <Link to={'/'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 bg-opacity-50 hover:bg-opacity-100 " >
                    show me all
                  </Link>             
                </div>

                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-1/2 h-3/4 -z-10">
                  <img 
                    src="./img/disc/disc.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain object-right-bottom" 
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-8 rounded-2xl bg-discover-200 relative z-10">
                <div className="w-1/2 flex flex-col">
                  <h2 className=" text-xl font-normal text-gray-600 mb-5">
                    Sale collection
                  </h2>

                  <h3 className=" text-2xl font-semibold text-gray-700 capitalize mb-8">
                    up to 80% off retail
                  </h3>

                  <Link to={'/'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 bg-opacity-50 hover:bg-opacity-100 " >
                    show me all
                  </Link>             
                </div>

                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-1/2 h-3/4 -z-10">
                  <img 
                    src="./img/disc/disc-1.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain object-right-bottom" 
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-8 rounded-2xl bg-discover-300 relative z-10">
                <div className="w-1/2 flex flex-col">
                  <h2 className=" text-xl font-normal text-gray-600 mb-5">
                    Sale collection
                  </h2>

                  <h3 className=" text-2xl font-semibold text-gray-700 capitalize mb-8">
                    up to 80% off retail
                  </h3>

                  <Link to={'/'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 bg-opacity-50 hover:bg-opacity-100 " >
                    show me all
                  </Link>             
                </div>

                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-1/2 h-3/4 -z-10">
                  <img 
                    src="./img/disc/disc-2.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain object-right-bottom" 
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-8 rounded-2xl bg-discover-400 relative z-10">
                <div className="w-1/2 flex flex-col">
                  <h2 className=" text-xl font-normal text-gray-600 mb-5">
                    Sale collection
                  </h2>

                  <h3 className=" text-2xl font-semibold text-gray-700 capitalize mb-8">
                    up to 80% off retail
                  </h3>

                  <Link to={'/'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 bg-opacity-50 hover:bg-opacity-100 " >
                    show me all
                  </Link>             
                </div>

                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-1/2 h-3/4 -z-10">
                  <img 
                    src="./img/disc/disc-3.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain object-right-bottom" 
                  />
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </section> 

    <section className="py-20">
    <div className="container">
        <h1 className="text-4xl font-extrabold text-gray-900 first-letter:capitalize mb-8">
          <span>New Arrivals.</span> 
          <span className="text-gray-600"> REY backpacks & bags</span> 
        </h1>

        <Swiper
            slidesPerView={1.1}
            spaceBetween={5}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="">
                <div className="relative w-full h-72 bg-gray-100 rounded-3xl overflow-hidden ">
                  <img 
                    src="./img/disc/disc.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />     
                </div>

                <div className="py-6 px-2">
                  <form action="" className="w-full">
                    <div className="flex items-center space-x-2">
                      <input type="radio" checked name="color" id="red" className="w-0 relative radio-check" />
                      <label htmlFor="red" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color" id="blue" className="w-0 relative radio-check" />
                      <label htmlFor="blue" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color" id="green" className="w-0 relative radio-check" />
                      <label htmlFor="green" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color" id="aa" className="w-0 relative radio-check" />
                      <label htmlFor="aa" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>
                    </div>
                  </form>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <div className="relative w-full h-72 bg-gray-100 rounded-3xl overflow-hidden ">
                  <img 
                    src="./img/disc/disc.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />     
                </div>

                <div className="py-6 px-2">
                  <form action="" className="w-full">
                    <div className="flex items-center space-x-2">
                      <input type="radio" checked name="color1" id="red" className="w-0 relative radio-check" />
                      <label htmlFor="red" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color1" id="blue" className="w-0 relative radio-check" />
                      <label htmlFor="blue" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color1" id="green" className="w-0 relative radio-check" />
                      <label htmlFor="green" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color1" id="aa" className="w-0 relative radio-check" />
                      <label htmlFor="aa" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>
                    </div>
                  </form>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <div className="relative w-full h-72 bg-gray-100 rounded-3xl overflow-hidden ">
                  <img 
                    src="./img/disc/disc.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />     
                </div>

                <div className="py-6 px-2">
                  <form action="" className="w-full">
                    <div className="flex items-center space-x-2">
                      <input type="radio" checked name="color2" id="red" className="w-0 relative radio-check" />
                      <label htmlFor="red" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color2" id="blue" className="w-0 relative radio-check" />
                      <label htmlFor="blue" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color2" id="green" className="w-0 relative radio-check" />
                      <label htmlFor="green" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color2" id="aa" className="w-0 relative radio-check" />
                      <label htmlFor="aa" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>
                    </div>
                  </form>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <div className="relative w-full h-72 bg-gray-100 rounded-3xl overflow-hidden ">
                  <img 
                    src="./img/disc/disc.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain" 
                  />     
                </div>

                <div className="py-6 px-2">
                  <form action="" className="w-full">
                    <div className="flex items-center space-x-2">
                      <input type="radio" checked name="color3" id="red" className="w-0 relative radio-check" />
                      <label htmlFor="red" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color3" id="blue" className="w-0 relative radio-check" />
                      <label htmlFor="blue" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color3" id="green" className="w-0 relative radio-check" />
                      <label htmlFor="green" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>

                      <input type="radio" name="color3" id="aa" className="w-0 relative radio-check" />
                      <label htmlFor="aa" className="w-5 h-5 rounded-full bg-red-400 label-check"></label>
                    </div>
                  </form>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </section>   
    </>

  )
}

export default Home