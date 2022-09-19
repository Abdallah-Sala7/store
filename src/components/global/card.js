import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function CardList(props) {
  const [color, setColor] = useState('');
  const [country, setCountry] = useState('');

  const handleColor = (e) => {
    setColor(e.target.value);
  }

  const handleCountry = (e) => {
    setCountry(e.target.value);
  }
  return (
    <div className="" key={props.id}>
      <div className="relative w-full h-72 p-4 bg-gray-100 rounded-3xl overflow-hidden group">
        <img 
          src={props.image}
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
        { props.category === "women's clothing" || props.category === "men's clothing" ?
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleColor} type="radio" name="color" value={'red'} id={`red${props.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`red${props.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-red-400 label-check after:border-red-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'blue'} id={`blue${props.id}`} disabled className="w-0 hidden relative radio-check" />
            <label htmlFor={`blue${props.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-blue-400 label-check after:border-blue-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'yellow'} id={`yellow${props.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`yellow${props.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-yellow-400 label-check after:border-yellow-400"></label>

            <input onChange={handleColor} type="radio" name="color" value={'green'} id={`green${props.id}`} className="w-0 hidden relative radio-check" />
            <label htmlFor={`green${props.id}`} className="w-5 h-5 rounded-full cursor-pointer bg-green-400 label-check after:border-green-400"></label>
          </div>
        </form>
        : props.category === "jewelery" ? 
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleColor} type="radio" name="color" value={'gold'} id={`gold${props.id}`} className="hidden relative radio-check" />
            <label htmlFor={`gold${props.id}`} className="w-5 h-5 cursor-pointer label-check after:border-yellow-300">
              <img 
                src="./img/gold.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleColor} type="radio" name="color" value={'selver'} id={`selver${props.id}`} checked className="hidden relative radio-check" />
            <label htmlFor={`selver${props.id}`} className="w-5 h-5 cursor-pointer label-check after:border-zinc-400">
              <img 
                src="./img/selver.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>
          </div>
        </form>
        : props.category === "electronics" ? 
        <form action="" className="w-full mb-6">
          <div className="flex items-center space-x-2">
            <input onChange={handleCountry} type="radio" name="cuntry" value={'usa'} id={`usa${props.id}`} className="hidden relative radio-check" />
            <label htmlFor={`usa${props.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="./img/usa.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleCountry} type="radio" name="cuntry" value={'china'} id={`china${props.id}`} className="hidden relative radio-check" />
            <label htmlFor={`china${props.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="./img/china.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>

            <input onChange={handleCountry} type="radio" name="cuntry" value={'korea'} id={`korea${props.id}`} checked className="hidden relative radio-check" />
            <label htmlFor={`korea${props.id}`} className="w-5 h-5 cursor-pointer label-check after:border-blue-400">
              <img 
                src="./img/korea.webp" 
                alt=""
                loading='lazy'
                className='w-full h-full object-cover rounded-full'
              />
            </label>
          </div>
        </form>:''      
        }

        <h2 className="text-xl font-medium text-gray-900 mb-2 capitalize text-ellipsis whitespace-nowrap overflow-hidden">
          {props.title}
        </h2>

        <h3 className="text-lg font-normal text-gray-500 mb-3 capitalize">
          {props.category}
        </h3>

        <div className="flex justify-between items-end ">
          <div className="py-1 px-3 border-2 border-green-500 rounded-md">
            <h4 className="text-green-500 font-semibold text-lg leading-none">
              {props.price}$
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
              {props.rating.rate} ({props.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList