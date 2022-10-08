import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../store/reducers/cartSlice';
import { addToWish, removeFromWish} from '../store/reducers/wishSlice';

import { toast } from 'react-toastify';

function CardList(props) {
  const [color, setColor] = useState('');
  const [country, setCountry] = useState('');
  const [saved, setSaved] = useState(props.saved);

  const dispatch = useDispatch()

  const handleColor = (e) => {
    setColor(e.target.value);
  }

  const handleCountry = (e) => {
    setCountry(e.target.value);
  }

  const handleSave = (e, props) =>{
    e.preventDefault();
    setSaved(!saved)
    if (saved) {
      dispatch(removeFromWish(props.item.id))
    }else{
      dispatch(addToWish(props.item))
    }
  }

  const notify = () => toast.success("Added to cart!",{theme:"light", position:"bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,});

  return (
    <div className="group">
      <div className="relative w-full h-72 p-4 bg-gray-100 rounded-3xl overflow-hidden">
        <img 
          src={props.item.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain" 
        />

        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center space-x-2 translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
          <button onClick={() => {dispatch(addToCart({item:props.item, quant:1})); notify()}} type="butoon" className="py-2 px-3 rounded-full bg-gray-900  flex items-center justify-center space-x-2 hover:bg-opacity-90 sm:py-2 sm:px-4">
            <span className="w-4 h-4">
              <img 
                src="/img/icons/shopping-basket.svg" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain img-white" 
              />
            </span>

            <span className="text-base leading-none text-gray-50 whitespace-nowrap">
              add to cart
            </span>
          </button>

          <Link to={'/details/'+props.item.id } className="py-2 px-3 rounded-full bg-gray-400  flex items-center justify-center space-x-2 hover:bg-opacity-90 sm:py-2 sm:px-4">
            <span className="w-4 h-4">
              <img 
                src="/img/icons/full-screen.svg" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain img-white" 
              />
            </span>

            <span className="text-base leading-none text-gray-50 whitespace-nowrap">
              full view
            </span>
          </Link> 
        </div>

        <a href='#' onClick={(e)=>{handleSave(e, props)}} className='absolute top-5 right-5 w-10 h-10 rounded-full bg-white flex justify-center items-center'>
          {saved ?
          
          <img 
            src="/img/icons/heart-solid.svg" 
            alt=""
            loading="lazy"
            className="w-5 h-5 object-contain" 
          /> : 

          <img 
            src="/img/icons/heart-regular.svg" 
            alt=""
            loading="lazy"
            className="w-5 h-5 object-contain opacity-70" 
          />
          }
        </a>
      </div>

      <div className="py-6 px-4">
        { props.item.category == "women's clothing" || props.item.category == "men's clothing" ?
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleColor} type="radio" name="color" value={'red'} id={`red${props.item.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`red${props.item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-red-400 label-check after:border-red-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'blue'} id={`blue${props.item.id}`} disabled className="w-0 hidden relative radio-check" />
            <label htmlFor={`blue${props.item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-blue-400 label-check after:border-blue-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'yellow'} id={`yellow${props.item.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`yellow${props.item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-yellow-400 label-check after:border-yellow-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'green'} id={`green${props.item.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`green${props.item.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-green-400 label-check after:border-green-400"></label>
          </div>
        </form>
        : props.item.category == "jewelery" ? 
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleColor} type="radio" name="color" value={'gold'} id={`gold${props.item.id}`} className="hidden relative radio-check" />
            <label htmlFor={`gold${props.item.id}`} className="w-5 h-5 cursor-pointer label-check after:border-yellow-300">
              <img 
                src="/img/gold.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleColor} type="radio" name="color" value={'selver'} id={`selver${props.item.id}`} checked className="hidden relative radio-check" />
            <label htmlFor={`selver${props.item.id}`} className="w-5 h-5 cursor-pointer label-check after:border-zinc-400">
              <img 
                src="/img/selver.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>
          </div>
        </form>
        : props.item.category == "electronics" ? 
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleCountry} type="radio" name="cuntry" value={'usa'} id={`usa${props.item.id}`} className="hidden relative radio-check" />
            <label htmlFor={`usa${props.item.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="/img/usa.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleCountry} type="radio" name="cuntry" value={'china'} id={`china${props.item.id}`} className="hidden relative radio-check" />
            <label htmlFor={`china${props.item.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="/img/china.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleCountry} type="radio" name="cuntry" value={'korea'} id={`korea${props.item.id}`} checked className="hidden relative radio-check" />
            <label htmlFor={`korea${props.item.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="/img/korea.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>
          </div>
        </form>:''      
        }

        <h2 className="text-xl font-medium text-gray-900 mb-2 capitalize text-ellipsis whitespace-nowrap overflow-hidden">
          {props.item.title}
        </h2>

        <h3 className="text-lg font-normal text-gray-500 mb-3 capitalize">
          {props.item.category}
        </h3>

        <div className="flex justify-between items-end ">
          <h4 className="py-1 px-3 text-lg text-green-500 font-semibold leading-none border-2 border-green-400 rounded-md">
            {props.item.price}$
          </h4>

          <div className="flex items-center  space-x-3 ">
            <span className="w-5 h-5">
              <img 
                src="/img/icons/star.svg" 
                alt=""
                loading="lazy"
                className="w-full h-full object-contain" 
              />
            </span>

            <span className="text-sm text-gray-500 font-medium">
              {props.item.rating.rate} ({props.item.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList