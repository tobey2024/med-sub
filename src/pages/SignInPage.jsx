import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormInputs( prev => (
      {
        ...prev, [name] : value
      }
    ))
    console.log(formInputs)
  }
  return (
    <form className='border mt-10 p-6 max-w-sm mx-auto shadow-md rounded-md'>
      <h1 className='font-bold text-center text-red-600 max-md:text-sm text-lg'>SIGN IN PAGE</h1>
      <div className='mt-4 py-3 rounded-md '>
        <label className='text-slate-400 text-lg'>Email:</label><br />
        <input 
          type='email'
          className='mt-2 w-full p-3 bg-transparent rounded-md hover:bg-slate-50  ring ring-slate-200 focus:ring-slate-300 focus:outline-none active:ring-violet-200'
          placeholder='enter your email'
          name='email'
          value={formInputs.email}
          onChange={handleChange}
        /><br />
      </div>
      
      <div className=' py-3 rounded-md  '>
        <label className='text-slate-400 text-lg'>Password:</label><br />
        <input 
          type='password'
          className='mt-2 w-full p-3 bg-transparent rounded-md hover:bg-slate-50   ring ring-slate-200 focus:ring-slate-300 focus:outline-none active:ring-violet-200'
          placeholder='enter your password'
          name='password'
          value={formInputs.password}
          onChange={handleChange}
        /><br />
      </div>
      <button
        className='border block mx-auto mt-2 p-4 w-full shadow-md text-white text-md bg-red-600 hover:bg-red-500 rounded-md'
      >
        Sign In
      </button>
      <p className='text-center mt-2'>No account? <Link to='/register' className='text-red-600'>Register here</Link></p>
    </form>
  )
}

export default SignInPage