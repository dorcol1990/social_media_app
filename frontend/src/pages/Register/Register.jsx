import React from 'react'

const Register = () => {
  return (
    <div>
        <form className='flex flex-col p-[30px] border-primary border-2 rounded-md mt-[30px]'>
            <input
            className='bg-[#161616] p-[5px] border-b-2 border-[#3d403f] focus:border-primary placeholder:text-[#8e9190] outline-none'
            type='text'
            name='firstname'
            placeholder='Insert name' />
        </form>
    </div>
  )
}

export default Register