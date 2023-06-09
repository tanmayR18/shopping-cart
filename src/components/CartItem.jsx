import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'

const CartItem = ({item, index}) => {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("Item removed")
  }
  return (
    <div className='flex justify-between border-b-[2px] border-slate-500  pb-6 p-2
    h-[240px] w-full gap-4'>
    
      <div className='flex items-center justify-center  w-[220px]'> 
        <img
        className=' h-full ' src={item.image} alt='product-img' />
      </div>
      <div className='flex flex-col gap-5 w-2/3'>
        <h1 className='font-bold text-xl'>
          {item.title.split(" ").slice(0,3).join(" ") + "..."}
        </h1>
        <h1 className='font-semibold'>
          {item.description.split(" ").slice(0,9).join(" ") + "..."}
        </h1>
        <div className='flex justify-between px-'>
          <p className='font-extrabold text-green-600 text-lg'>${item.price}</p>
          <div
          className='bg-red-300 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-red-800'
          onClick={removeFromCart}>
            <MdDelete/>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default CartItem