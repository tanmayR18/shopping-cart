import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({post}) => {

  const {cart} = useSelector( state => state)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from the cart")
  }

  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition-all duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]
     gap-3 p-4 mt-10 ml-5 rounded-xl border'>
      <div>
        <p
        className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'
        >{post.title.slice(0,14) + "..."}</p>
      </div>
      <div>
        <p
        className='w-40 text-gray-400 font-normal text-[12px] text-left'
        >{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img 
        className='h-full w-full'
        src={post.image} alt='product-img' />
      </div>
      
      <div className=' flex justify-between gap-12'>
        <div>
          <p
          className=' text-green-600 font-semibold '
          >${post.price}</p>
        </div>

        {
          cart.some( p => p.id === post.id) ?
          (<button
          className=' text-gray-700 border-2 border-gray-700 rounded-full
           font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
           transition-all duration-300'
          onClick={removeFromCart}>
            Remove Item
          </button>) : 
          (<button
          className=' text-gray-700 border-2 border-gray-700 rounded-full
           font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
           transition-all duration-300'
          onClick={addToCart}>
            Add Item
          </button>)
        }
      </div>
    </div>
  )
}

export default Product