import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='max-w-[1720px] flex justify-between items-center mx-auto border-primary border-2 rounded-md p-[10px]'>
        <div className='text-[32px]'>
            SocialMedia
        </div>
        <div className='flex gap-3'>
            <NavLink to='/register'>
                <div  className='px-[15px] py-[5px] bg-gradient-to-r from-primary to-secondary text-[#161616] rounded-sm font-bold'>Register</div>
            </NavLink>
            <NavLink to='/login'>
                <div className='px-[15px] py-[5px] bg-gradient-to-r from-primary to-secondary text-[#161616] rounded-sm font-bold'>Login</div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar