import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProduct(res.data))
  }, []);

  const handleColor = (e) => {
    setColor(e.target.value);
    console.log(color);
  }
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
              src='./img/hero/hero-right-2.webp'
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
        <h1 className="text-2xl font-extrabold text-gray-900 first-letter:capitalize mb-8 md:text-4xl">
          <span>discover more.</span> 
          <span className="text-gray-600"> Good things are waiting for you</span> 
        </h1>

        <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            loop={false}
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
              <div className="p-5 rounded-2xl bg-discover-100 relative z-10 sm:p-8">
                <div className=" w-11/12 flex flex-col sm:w1/2">
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

                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-1/2 h-1/2 sm:h-3/4 -z-10">
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
              <div className="p-5 rounded-2xl bg-discover-200 relative z-10 sm:p-8">
                <div className=" w-11/12 flex flex-col sm:w1/2">
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
              <div className="p-5 rounded-2xl bg-discover-300 relative z-10 sm:p-8">
                <div className=" w-11/12 flex flex-col sm:w1/2">
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
              <div className="p-5 rounded-2xl bg-discover-400 relative z-10 sm:p-8">
                <div className=" w-11/12 flex flex-col sm:w1/2">
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
        <h1 className="text-2xl font-extrabold text-gray-900 first-letter:capitalize mb-8 md:text-4xl">
          <span>New Arrivals.</span> 
          <span className="text-gray-600"> REY backpacks & bags</span> 
        </h1>

        <Swiper
            slidesPerView={1.1}
            spaceBetween={5}
            loop={false}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {product.map((item, index) => {
              return (
              <SwiperSlide key={index}>
                <div className="">
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
                        <input onChange={handleColor} type="radio" name="color" value={'red'} id={`red${item.id}`} className="w-0 relative radio-check" />
                        <label htmlFor={`red${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-red-400 label-check after:border-red-400"></label>

                        <input onChange={handleColor} type="radio" name="color" value={'blue'} id={`blue${item.id}`} disabled className="w-0 relative radio-check" />
                        <label htmlFor={`blue${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-blue-400 label-check after:border-blue-400"></label>

                        <input onChange={handleColor} type="radio" name="color" value={'yellow'} id={`yellow${item.id}`} className="w-0 relative radio-check" />
                        <label htmlFor={`yellow${item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-yellow-400 label-check after:border-yellow-400"></label>

                        <input onChange={handleColor} type="radio" name="color" value={'green'} id={`green${item.id}`} className="w-0 relative radio-check" />
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
              </SwiperSlide>                
              )
            })}

        </Swiper>
      </div>
    </section>   
    </>

  )
}

export default Home