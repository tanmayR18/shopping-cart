import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'
import { toast } from 'react-hot-toast';

const Cart = () => {

  const { cart } = useSelector( state => state);
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price ,0) )
  },[cart])

  return (
    <div className=' p-2 mt-4 w-6xl md:pt-3'>
    
      {
        cart.length > 0 ? 
        (<div className='flex gap-10 justify-center flex-col lg:flex-row'>
          <div className='flex flex-col gap-5 w-full lg:w-2/4 '>
            {
              cart.map( (item,index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))
            }
          </div>

          <div className='flex flex-col  md:flex-row lg:flex-col justify-between max-h-[80vh] lg:w-1/4 gap-2'>
            <div>
              <div className='text-green-700 font-bold uppercase'>Your Cart</div>
              <div className='text-green-700 text-4xl font-bold'>Summary</div>
              <p className='font-bold mt-5'>
                <span>Total Item: {cart.length}</span>
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <p className='font-bold text-slate-600'>Total Amount: 
              <span className='text-black ml-1'>${totalAmount}</span></p>
              <button
              onClick={() => {
                toast('This feature will be added soon', {
                  icon: '😊',
                });
              }} 
              className='text-white font-bold px-20 py-2 rounded-md bg-green-700 
              w-full md:w-fit lg:w-full'>
                Check Now
              </button>
            </div>
          </div>

        </div>) :

        (<div className=' flex flex-col gap-4 justify-center items-center h-[calc(100vh-5rem)]'>
          <h1 className='font-bold tracking-wide'>Cart Empty</h1>
          <NavLink to={'/'}>
            <button className='bg-green-500  rounded-md px-7 py-3 font-bold text-white
            hover:bg-green-600 transition-colors duration-300'>
              Shop Now
            </button>
          </NavLink>
        </div>)
      }
    </div>
  )
}

export default Cart