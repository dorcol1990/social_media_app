import React from 'react'

const Register = () => {
  return (
    <div className='min-h-screen'>
        <form className='flex flex-col w-[70%] p-[30px] border-primary border-2 rounded-md mt-[30px]'>
            <input
            className='bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary placeholder:text-[#8e9190] outline-none'
            type='text'
            name='firstName'
            placeholder='Insert name' />

            <input
            className='bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary placeholder:text-[#8e9190] outline-none'
            type='text'
            name='lastName'
            placeholder='Insert last name' />

            <input
            className='bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary placeholder:text-[#8e9190] outline-none'
            type='email'
            name='email'
            placeholder='Insert email' />

            <input
            className='bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary placeholder:text-[#8e9190] outline-none'
            type='password'
            name='password'
            placeholder='Insert password' />

            <select name='gender' className='bg-[#161616] text-[#808080] w-[250PX] mb-5 outline-none'>
              <option value='gender' defaultChecked>gender</option>
              <option value='male'>male</option>
              <option value='female'>female</option>
            </select>

            <input
            className='bg-[#161616] p-[5px] w-[250px] mb-5 text-[#808080] outline-none'
            type='file'
            name='image' />

            <input
            className='bg-gradient-to-r from-primary to-secondary mb-[45px] text-[#161616] p-1 w-[250px] outline-none rounded-sm font-medium'
            type='date'
            name='birthDate'
            />

            <button
            type='submit'
            className='bg-gradient-to-r from-primary to-secondary text-[#161616] font-bold rounded-sm p-2'
            >Register</button>
        </form>
    </div>
  )
}

export default Register