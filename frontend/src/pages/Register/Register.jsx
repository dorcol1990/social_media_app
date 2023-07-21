import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { FileParser } from '../../utils/FileParser';
import UserService from '../../services/userService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const VALID_TYPE = ['image/png', 'image/jpeg', 'image/jpg'];

  const navigate = useNavigate();

  const formik = useFormik ({
    initialValues : {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      gender : '',
      image : '',
      birthDate : '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('field is required'),
      lastName: Yup.string().required('field is required'),
      email: Yup.string().required('field is required'),
      password: Yup.string().required('field is required'),
      gender: Yup.string().required('field is required'),
      image: Yup.mixed().required('field is required')
              .test('fileSize', 'wrong file size', (value)=> value.size < 2097152)
              .test('fileType', 'wrong file type', (value)=> VALID_TYPE.includes(value.type)),
      birthDate: Yup.string().required('field is required')
    }),
    onSubmit : (values) =>{

        FileParser(values.image)
        .then((res)=> {
          UserService.registerUser({...values, image: res})
            .then((data)=> {
              if (data.status === 200){
                  toast.success('user successfully registered')
                  setTimeout(()=> navigate('/login'), 2000)
              }else {
                  toast.warning('user already registred')
              }
            })
            .catch((err)=> console.log(err))
            })
        .catch((err)=> console.log(err))


        formik.resetForm();
        //console.log(values);
    }
  });

  const showError = (name)=>
        !!formik.errors[name] &&
        formik.touched[name];
  

  return (
    <div className='min-h-screen'> 
        <form onSubmit={formik.handleSubmit} className='flex flex-col w-[70%] p-[30px] border-primary border-2 rounded-md mt-[30px]'>

            <input
            className={`bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary ${showError('firstName') ? 'placeholder-customRed' : 'placeholder-text-[#8e9190]'
            } outline-none`}
            type='text'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder={showError('firstName') ? 'field is required' : 'Insert name'} />

            <input
            className={`bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary ${showError('lastName') ? 'placeholder-customRed' : 'placeholder-text-[#8e9190]'
            } outline-none`}
            type='text'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder={showError('lastName') ? 'field is required' : 'Insert last name'} />

            <input
            className={`bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary ${showError('email') ? 'placeholder-customRed' : 'placeholder-text-[#8e9190]'
            } outline-none`}
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder={showError('email') ? 'field is required' : 'Insert email'} />

            <input
            className={`bg-[#161616] p-[5px] border-b-2 border-[#3d403f] mb-5 focus:border-primary ${showError('password') ? 'placeholder-customRed' : 'placeholder-text-[#8e9190]'
            } outline-none`}
            type='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder={showError('password') ? 'field is required' : 'Insert password'} />

            <div className='flex items-center mb-5'>
            <select name='gender' value={formik.values.gender} onChange={formik.handleChange} className='bg-[#161616] text-[#808080] w-[250PX] outline-none'>
              <option value=' ' defaultChecked>gender</option>
              <option value='male'>male</option>
              <option value='female'>female</option>
            </select>
            <span className='text-customRed ml-[7px]'>
            {formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}
            </span>
            </div>

            <div className='flex items-center mb-5'>
            <input
            className='bg-[#161616] p-[5px] w-[250px]  text-[#808080] outline-none'
            type='file'
            name='image'
            onChange={(e)=>formik.setFieldValue(e.target.name, e.target.files[0])}
            />
            <span className='text-customRed ml-[7px]'>
              {formik.touched.image && formik.errors.image ? formik.errors.image : null}
            </span>
            </div>
            
            <div className='flex items-center mb-[45px]'>
            <input
            className='bg-gradient-to-r from-primary to-secondary  text-[#161616] p-1 w-[250px] outline-none rounded-sm font-medium'
            type='date'
            name='birthDate'
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            />
            <span className='text-customRed ml-[7px]'>
            {formik.touched.birthDate && formik.errors.birthDate ? formik.errors.birthDate : null}
            </span>
            </div>

            <button
            type='submit'
            className='bg-gradient-to-r from-primary to-secondary text-[#161616] font-bold rounded-sm p-2'
            >Register</button>
        </form>
    </div>
  )
}

export default Register