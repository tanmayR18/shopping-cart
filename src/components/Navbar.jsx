import React from 'react'
import { SlBasket } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


// https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo-2012.png
const Navbar = () => {
  const {cart} = useSelector( state => state)
  return (
    <div>
      <nav className=' flex justify-between items-center h-20 max-w-6xl mx-auto px-2'>
        <NavLink to={'/'}>
          <img
          className=' w-32 h-30'
          src='/logo.png' alt='logo' />
        </NavLink>
        
        <div className='flex text-slate-100 items-center font-medium space-x-6'> 
          <NavLink to={'/'}>
            <p>Home</p>
          </NavLink>

          <NavLink to={'/cart'}>
            <div className='relative'> 
              <SlBasket className='text-2xl'/>
              {
                cart.length > 0 && 
                <span 
                className='absolute -top-1 -right-2 bg-green-600 text-xs
                flex justify-center items-center w-5 h-5 animate-bounce rounded-full'
                >{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar