import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import CardList from "../component/card";
import Loading from "../component/loading";

function Home() {
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
      <header className='w-full bg-primary-100 relative z-10'>
        <div className="container h-full pt-40 flex flex-col items-center justify-between md:flex-row">
          <div className='w-full pb-5 md:w-1/2'>
            <h1 className='font-semibold text-2xl text-gray-500 opacity-80 mb-8 first-letter:capitalize'>
              In this season, find the best
            </h1>

            <h2 className='font-bold text-3xl text-gray-900 capitalize mb-8 sm:text-6xl'>
              Exclusive collection for everyone
            </h2>

            <a href="#new" className='custom-btn'>
              <span>
                Shop now
              </span>
            </a>      
          </div>

          <div className=' w-full h-full md:w-1/2'>
          <Swiper
            spaceBetween={0}
            effect={'fade'}
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

      <section className="py-8 sm:py-12 md:py-24">
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

                    <Link to={'/product'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 hover:bg-opacity-50 " >
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

                    <Link to={'/product'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 hover:bg-opacity-50 " >
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

                    <Link to={'/product'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 hover:bg-opacity-50 " >
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

                    <Link to={'/product'} className="py-3 px-5 w-fit font-semibold rounded-full text-gray-700 bg-primary-100 hover:bg-opacity-50 " >
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

      <section id="new" className="py-8 sm:py-12 md:py-24">
        <div className="container">
          <h1 className="text-2xl font-extrabold text-gray-900 first-letter:capitalize mb-8 md:text-4xl">
            <span>New Arrivals.</span> 
            <span className="text-gray-600"> REY backpacks & bags</span> 
          </h1>

          {loading ? 
          <Swiper className="group"
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
                  <CardList item={item} id={item.id} image={item.image} title={item.title} price={item.price} category={item.category} rating={item.rating} />
                </SwiperSlide>                
                )
              })}

          </Swiper> : <Loading />
          }
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-24">
        <div className="container bg-line flex justify-center flex-wrap sm:justify-between">
          <div className="w-11/12 sm:w-5/12 md:w-1/4 lg:w-1/5">
            <div className="w-36 h-36 mx-auto">
              <img 
                src="./img/features/feature1.webp" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="p-5 flex flex-col items-center justify-center text-center">
              <span className="py-1 px-2 w-fit bg-red-200 text-red-500 mb-6 capitalize rounded-full leading-none text-sm">
                step 1
              </span>

              <h1 className="text-xl font-medium text-gray-800 mb-6 capitalize">
                filter & discover
              </h1>

              <p className="text-sm text-gray-500 leading-6 first-letter:capitalize">
                smart filtering and suggestions make it easy to find
              </p>
            </div>
          </div>

          <div className="w-11/12 sm:w-5/12 md:w-1/4 lg:w-1/5">
            <div className="w-36 h-36 mx-auto">
              <img 
                src="./img/features/feature2.webp" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="p-5 flex flex-col items-center justify-center text-center">
              <span className="py-1 px-2 w-fit bg-indigo-200 text-indigo-500 mb-6 capitalize rounded-full leading-none text-sm">
                step 2
              </span>

              <h1 className="text-xl font-medium text-gray-800 mb-6 capitalize">
                add to bag
              </h1>

              <p className="text-sm text-gray-500 leading-6 first-letter:capitalize">
                easily select the correct items and add them to the cart
              </p>
            </div>
          </div>

          <div className="w-11/12 sm:w-5/12 md:w-1/4 lg:w-1/5">
            <div className="w-36 h-36 mx-auto">
              <img 
                src="./img/features/feature3.webp" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="p-5 flex flex-col items-center justify-center text-center">
              <span className="py-1 px-2 w-fit bg-yellow-200 text-yellow-500 mb-6 capitalize rounded-full leading-none text-sm">
                step 3
              </span>

              <h1 className="text-xl font-medium text-gray-800 mb-6 capitalize">
                fast shipping
              </h1>

              <p className="text-sm text-gray-500 leading-6 first-letter:capitalize">
                the carrier will confirm and ship quickly to you
              </p>
            </div>
          </div>

          <div className="w-11/12 sm:w-5/12 md:w-1/4 lg:w-1/5">
            <div className="w-36 h-36 mx-auto">
              <img 
                src="./img/features/feature4.webp" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="p-5 flex flex-col items-center justify-center text-center">
              <span className="py-1 px-2 w-fit bg-purple-200 text-purple-500 mb-6 capitalize rounded-full leading-none text-sm">
                step 1
              </span>

              <h1 className="text-xl font-medium text-gray-800 mb-6 capitalize">
                enjoy the product
              </h1>

              <p className="text-sm text-gray-500 leading-6 first-letter:capitalize">
                have fun and enjoy your 5-star quality products
              </p>
            </div>
          </div>
        </div>
      </section> 

      <section className="py-8 sm:py-12 md:py-24 bg-gray-100">
        <div className="container">
          <h1 className=" mb-14 font-bold text-gray-900 text-2xl text-center first-letter:capitalize sm:text-4xl">
            start exploring
          </h1>

          <ul className="p-1 w-11/12 mb-14 flex items-center overflow-x-auto gap-2 mx-auto bg-white rounded-full shadow-lg md:gap-3 sm:max-w-fit remove-scrollbar">
            <li className="p-2 rounded-full transition hover:bg-gray-900 group parent-hover active md:py-2 md:px-6">
              <a href="#" type="button" className="flex items-center space-x-2">
                <span className="w-3 h-3 md:w-5 md:h-5 ">
                  <img 
                    src="./img/icons/male.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain img-dark change-img-hover"
                  />
                </span>

                <span className="text-sm text-gray-900 capitalize leading-none sm:text-base">
                  man
                </span>
              </a>
            </li>

            <li className="p-2 rounded-full transition hover:bg-gray-900 group parent-hover md:py-2 md:px-6">
              <a href="#" type="button" className="flex items-center space-x-2">
                <span className="w-3 h-3 md:w-5 md:h-5 ">
                  <img 
                    src="./img/icons/female.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain img-dark change-img-hover"
                  />
                </span>

                <span className="text-sm text-gray-900 capitalize leading-none sm:text-base">
                  women
                </span>
              </a>
            </li>

            <li className="p-2 rounded-full transition hover:bg-gray-900 group parent-hover md:py-2 md:px-6">
              <a href="#" type="button" className="flex items-center space-x-2">
                <span className="w-3 h-3 md:w-5 md:h-5 ">
                  <img 
                    src="./img/icons/kids.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain img-dark change-img-hover"
                  />
                </span>

                <span className="text-sm text-gray-900 capitalize leading-none sm:text-base">
                  kids
                </span>
              </a>
            </li>

            <li className="p-2 rounded-full transition hover:bg-gray-900 group parent-hover md:py-2 md:px-6">
              <a href="#" type="button" className="flex items-center space-x-2">
                <span className="w-3 h-3 md:w-5 md:h-5 ">
                  <img 
                    src="./img/icons/diamond.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain img-dark change-img-hover"
                  />
                </span>

                <span className="text-sm text-gray-900 capitalize leading-none sm:text-base">
                  jewelry
                </span>
              </a>
            </li>

            <li className="p-2 rounded-full transition hover:bg-gray-900 group parent-hover md:py-2 md:px-6">
              <a href="#" type="button" className="flex items-center space-x-2">
                <span className="w-3 h-3 md:w-5 md:h-5 ">
                  <img 
                    src="./img/icons/barbell.svg" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain img-dark change-img-hover"
                  />
                </span>

                <span className="text-sm text-gray-900 capitalize leading-none sm:text-base">
                  sports
                </span>
              </a>
            </li>
          </ul>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo1.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  manufacturar
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  backpack
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore1.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>

            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo2.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  manufacturar
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  shoses
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore2.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>

            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo3.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  manufacturar
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  recycled blanket
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore3.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>

            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo4.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  manufacturar
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  clining shorts
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore5.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>

            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo5.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  clyning jersey
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  backpack
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore6.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>

            <div className="relative p-7 bg-white flex flex-col rounded-3xl overflow-hidden z-10 transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-discover-100">
                  <img 
                    src="./img/explore/explore_logo1.webp" 
                    alt=""
                    loading="lazy"
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                <p className="text-sm text-gray-400">
                  230 product
                </p>              
              </div>

              <div className="mb-10">
                <h2 className="text-gray-500 font-normal text-base capitalize mb-1">
                  manufacturar
                </h2>

                <h3 className="text-gray-900 font-semibold text-3xl capitalize">
                  backpack
                </h3>
              </div>

              <Link to={'/'} className="flex items-center gap-2">
                <span className="text-lg text-gray-700 font-normal leading-none transition-colors duration-300 group-hover:text-blue-500">see collection</span>

                <img 
                  src="./img/icons/arrow-right.svg" 
                  alt=""
                  loading="lazy"
                  className="w-5 h-5 object-contain img-dark group-hover:filter"
                />
              </Link>

              <div className="absolute bottom-8 right-8 w-full h-full -z-10 opacity-70">
                <img 
                  src="./img/explore/explore9.svg" 
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-2 sm:px-0">
        <div className="container px-6 pt-12 bg-gray-100 rounded-3xl flex items-end flex-wrap sm:px-12 md:px-24 md:pt-24">
          <div className="w-full pb-12 md:w-1/2">
            <h1 className="text-2xl mb-8 text-gray-900 font-bold first-letter:capitalize md:text-3xl lg:text-5xl">
              don't miss out on special offers
            </h1>

            <p className="mb-10 text-gray-500 font-normal text-xl first-letter:capitalize">
              register to receive news about the latest, savings combos, discount codes...
            </p>

            <ul className="mb-10">
              <li className="flex items-center gap-4 mb-4">
                <span className="py-px px-2 rounded-3xl bg-purple-300 text-purple-800 text-sm">01</span>
                <span className="text-gray-700 text-lg first-letter:capitalize">savings combos</span>
              </li>

              <li className="flex items-center gap-4 mb-4">
                <span className="py-px px-2 rounded-3xl bg-blue-300 text-blue-800 text-sm">02</span>
                <span className="text-gray-700 text-lg first-letter:capitalize">freeship</span>
              </li>

              <li className="flex items-center gap-4 mb-4">
                <span className="py-px px-2 rounded-3xl bg-red-300 text-red-800 text-sm">03</span>
                <span className="text-gray-700 text-lg first-letter:capitalize">premium magazines</span>
              </li>
            </ul>

            <form action="" className="w-full">
              <div className="relative w-full h-12">
                <input 
                  type="text"
                  placeholder="Enter your email"
                  className="h-full w-full rounded-full outline-none border text-gray-600 border-gray-300 pl-4 pr-12 "
                />

                <a href="#" className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full h-10 w-10 bg-gray-600 flex items-center justify-center hover:bg-opacity-90">
                  <img 
                    src="./img/icons/arrow-right.svg" 
                    alt=""
                    loading="lazy"
                    className="w-5 h-5 object-contain img-white " 
                  />
                </a>
              </div>
            </form>
          </div>

          <div className="w-full h-full md:w-1/2 md:pl-10">
            <img 
              src="./img/promo.webp" 
              alt=""
              loading="lazy"
              className="w-full h-full object-contain object-right-bottom"
            />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-24 bg-gray-100 ">
        <div className="container ">
          <h1 className="text-2xl font-extrabold text-gray-900 first-letter:capitalize mb-8 md:text-4xl">
            <span>the latest news.</span> 
            <span className="text-gray-600"> from the Ciseco blog</span> 
          </h1>

          <div className="flex flex-wrap items-stretch justify-between lg:flex-nowrap">
            <div className="relative w-full mb-12 overflow-hidden group lg:mb-0 lg:w-1/2 lg:mr-10">
              <Link to={'/'} className="flex flex-col justify-between">
                <div className=" w-full h-72 overflow-hidden rounded-3xl sm:h-80 md:h-96 ">
                  <img 
                    src="./img/blog/blog1.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="w-full pt-5 lg:pt-8">
                  <h2 className="text-2xl text-gray-700 font-semibold transition capitalize mb-5 group-hover:text-indigo-700 md:text-3xl lg:mb-8 ">
                    turpis Cursus In Hac Habitasse Platea Dictumst Quisque Sagittis Purus 
                  </h2>

                  <p className="text-gray-500 mb-5 md:text-lg lg:mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima temporibus deserunt sequi tenetur ipsum quisquam 
                  </p>

                  <div className="flex items-center space-x-4">
                    <img 
                      src="./img/blog/image-1.webp"
                      alt=""
                      loading="lazy"
                      className="w-10 h-10 object-contain rounded-full "
                    />

                    <h3 className="text-gray-600 font-semibold text-lg capitalize leading-none hover:text-gray-900">
                      abdalrahman
                    </h3>

                    <span className="text-gray-500 text-sm capitalize leading-none">20 may 2022</span>
                  </div>
                </div>
              </Link>

              <div className="absolute top-5 right-5 flex flex-col space-y-3  z-10">
                <a href="http://facebook.com" target="_blank" rel="noreferrer noopener" type="button" title="" className="w-8 h-8 flex justify-center items-center bg-slate-50 rounded-full translate-x-20 transition-transform duration-300 delay-75 group-hover:translate-x-0 hover:bg-opacity-90 hover:scale-105 md:w-10 md:h-10">
                  <img
                    src="./img/icons/facebook.svg"
                    alt=""
                    loading="lazy"
                    className="w-4 h-4 object-contain md:w-5 md:h-5"
                  />
                </a>

                <a href="http://twitter.com" target="_blank" rel="noreferrer noopener" type="button" title="" className="w-8 h-8 flex justify-center items-center bg-slate-50 rounded-full translate-x-20 transition-transform duration-300 delay-100 group-hover:translate-x-0 hover:bg-opacity-90 hover:scale-105 md:w-10 md:h-10">
                  <img
                    src="./img/icons/twitter.svg"
                    alt=""
                    loading="lazy"
                    className="w-4 h-4 object-contain md:w-5 md:h-5"
                  />
                </a>

                <a href="http://instagram.com" target="_blank" rel="noreferrer noopener" type="button" title="" className="w-8 h-8 flex justify-center items-center bg-slate-50 rounded-full translate-x-20 transition-transform duration-300 delay-150 group-hover:translate-x-0 hover:bg-opacity-90 hover:scale-105 md:w-10 md:h-10">
                  <img
                    src="./img/icons/instagram.svg"
                    alt=""
                    loading="lazy"
                    className="w-4 h-4 object-contain md:w-5 md:h-5"
                  />
                </a>

                <a href="http://linkedin.com" target="_blank" rel="noreferrer noopener" type="button" title="" className="w-8 h-8 flex justify-center items-center bg-slate-50 rounded-full translate-x-20 transition-transform duration-300 delay-200 group-hover:translate-x-0 hover:bg-opacity-90 hover:scale-105 md:w-10 md:h-10">
                  <img
                    src="./img/icons/linkedin.svg"
                    alt=""
                    loading="lazy"
                    className="w-4 h-4 object-contain md:w-5 md:h-5"
                  />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Link to={'/'} className="w-full mb-9 group flex flex-col-reverse items-center justify-between sm:flex-row sm:items-stretch">
                <div className="w-full flex flex-col justify-between sm:pr-3">
                  <h2 className="text-base text-center text-gray-700 font-semibold transition capitalize mb-5 group-hover:text-indigo-700 sm:text-start sm:text-lg ">
                    turpis Cursus In Hac Habitasse Platea Dictumst Quisque Sagittis Purus 
                  </h2>
                  
                  <p className="text-gray-500 hidden text-sm mb-5 md:block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum earum aliquid, excepturi totam amet ea quidem quae mollitia explicabo id.  
                  </p>

                  <div className="flex items-center justify-center space-x-3 sm:justify-start">
                    <img 
                      src="./img/blog/image-4.webp"
                      alt=""
                      loading="lazy"
                      className="w-8 h-8 object-cover rounded-full "
                    />

                    <h3 className="text-gray-600 font-semibold capitalize leading-none hover:text-gray-900">
                      abdalrahman
                    </h3>

                    <span className=" hidden text-gray-500 text-xs capitalize leading-none sm:block">20 may 2022</span>
                  </div>
                </div>

                <div className="flex-shrink-0 h-28 w-28 overflow-hidden rounded-2xl mb-5 sm:mb-0 md:w-44 md:h-44 lg:w-48 lg:h-48">
                  <img 
                    src="./img/blog/blog4.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </Link>   

              <Link to={'/'} className="w-full mb-9 group flex flex-col-reverse items-center justify-between sm:flex-row sm:items-stretch">
                <div className="w-full flex flex-col justify-between sm:pr-3">
                  <h2 className="text-base text-center text-gray-700 font-semibold transition capitalize mb-5 group-hover:text-indigo-700 sm:text-start sm:text-lg ">
                    turpis Cursus In Hac Habitasse Platea Dictumst Quisque Sagittis Purus 
                  </h2>
                  
                  <p className="text-gray-500 hidden text-sm mb-5 md:block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum earum aliquid, excepturi totam amet ea quidem quae mollitia explicabo id.  
                  </p>

                  <div className="flex items-center justify-center space-x-3 sm:justify-start">
                    <img 
                      src="./img/blog/image-6.webp"
                      alt=""
                      loading="lazy"
                      className="w-8 h-8 object-cover rounded-full "
                    />

                    <h3 className="text-gray-600 font-semibold capitalize leading-none hover:text-gray-900">
                      abdalrahman
                    </h3>

                    <span className=" hidden text-gray-500 text-xs capitalize leading-none sm:block">20 may 2022</span>
                  </div>
                </div>

                <div className="flex-shrink-0 h-28 w-28 overflow-hidden rounded-2xl mb-5 sm:mb-0 md:w-44 md:h-44 lg:w-48 lg:h-48">
                  <img 
                    src="./img/blog/blog3.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </Link>   

              <Link to={'/'} className="w-full group flex flex-col-reverse items-center justify-between sm:flex-row sm:items-stretch">
                <div className="w-full flex flex-col justify-between sm:pr-3">
                  <h2 className="text-base text-center text-gray-700 font-semibold transition capitalize mb-5 group-hover:text-indigo-700 sm:text-start sm:text-lg ">
                    turpis Cursus In Hac Habitasse Platea Dictumst Quisque Sagittis Purus 
                  </h2>
                  
                  <p className="text-gray-500 hidden text-sm mb-5 md:block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum earum aliquid, excepturi totam amet ea quidem quae mollitia explicabo id.  
                  </p>

                  <div className="flex items-center justify-center space-x-3 sm:justify-start">
                    <img 
                      src="./img/blog/image-10.webp"
                      alt=""
                      loading="lazy"
                      className="w-8 h-8 object-cover rounded-full "
                    />

                    <h3 className="text-gray-600 font-semibold capitalize leading-none hover:text-gray-900">
                      abdalrahman
                    </h3>

                    <span className=" hidden text-gray-500 text-xs capitalize leading-none sm:block">20 may 2022</span>
                  </div>
                </div>

                <div className="flex-shrink-0 h-28 w-28 overflow-hidden rounded-2xl mb-5 sm:mb-0 md:w-44 md:h-44 lg:w-48 lg:h-48">
                  <img 
                    src="./img/blog/blog2.webp" 
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </Link>         
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-24">
        <div className="container">
          <h1 className="text-2xl font-extrabold text-center text-gray-900 first-letter:capitalize mb-20 md:text-4xl">
            <span className="mb-2 block sm:mb-5">Good news from far away</span> 
            <span className="text-gray-500 font-medium text-sm md:text-lg">Let's see what people think of Ciseco</span> 
          </h1>

          <div className="relative ">
            <div className="mx-auto w-11/12 md:w-1/2">
              <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                >
                <SwiperSlide >
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 mb-5 sm:mb-10">
                      <img 
                        src="./img/testimonial/testimonial2.webp"
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-contint"
                      />
                    </div>

                    <p className="mb-5 text-lg font-medium text-gray-600 first-letter:capitalize text-center sm:mb-10">
                      peat quality products, affordable prices, fast and friendly delivery. I very recommend.
                    </p>

                    <h2 className="mb-5 text-2xl font-bold text-gray-800  text-center capitalize sm:mb-10">
                      abdalrahman
                    </h2>

                    <div className="flex items-center justify-center gap-2">
                      <img 
                        src="./img/icons/star.svg"
                        alt=""
                        loading="lazy"
                        className="w-4 h-4 object-contain"
                      />

                      <img 
                        src="./img/icons/star.svg"
                        alt=""
                        loading="lazy"
                        className="w-4 h-4 object-contain"
                      />

                      <img 
                        src="./img/icons/star.svg"
                        alt=""
                        loading="lazy"
                        className="w-4 h-4 object-contain"
                      />

                      <img 
                        src="./img/icons/star.svg"
                        alt=""
                        loading="lazy"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>              
            </div>

            
            <div className=" hidden absolute inset-x-0 top-10 bottom-0 pointer-events-none z-10 md:block">
              <img 
                src="./img/testimonial/testimonial1.webp" 
                alt=""
                loading="lazy"
                className=" absolute top-0 left-16 translate-x-10 w-14 h-14 object-cover lg:left-52" 
              />

              <img 
                src="./img/testimonial/testimonial3.webp" 
                alt=""
                loading="lazy"
                className=" absolute top-0 right-16 -translate-x-10 w-14 h-14 object-cover lg:right-52" 
              />

              <img 
                src="./img/testimonial/testimonial4.webp" 
                alt=""
                loading="lazy"
                className=" absolute top-1/2 left-16 -translate-y-1/2 -translate-x-20 w-14 h-14 object-cover lg:left-52" 
              />
              
              <img 
                src="./img/testimonial/testimonial5.webp" 
                alt=""
                loading="lazy"
                className=" absolute top-1/2 right-16 -translate-y-1/2 translate-x-20 w-14 h-14 object-cover lg:right-52" 
              />
              
              <img 
                src="./img/testimonial/testimonial6.webp" 
                alt=""
                loading="lazy"
                className=" absolute bottom-0 translate-x-10 left-16 w-14 h-14 object-cover lg:left-52" 
              />

              <img 
                src="./img/testimonial/testimonial8.webp" 
                alt=""
                loading="lazy"
                className=" absolute bottom-0 -translate-x-10 right-16 w-14 h-14 object-cover lg:right-52" 
              />
            </div> 
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home