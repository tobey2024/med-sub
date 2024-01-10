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
    <form className='border mt-10 p-6 max-w-sm mx-auto shadow-md bg-slate-100'>
      <h1 className='font-bold text-center max-md:text-sm text-lg'>SIGN IN PAGE</h1>
      <div className='mt-4 p-3 rounded-md '>
        <label>Email:</label><br />
        <input 
          type='email'
          className='mt-2 w-full p-3 bg-transparent border border-slate-200 rounded-md hover:bg-slate-50 ring  hover:ring-red-200 active:border-slate-50'
          placeholder='enter your email'
          name='email'
          value={formInputs.email}
          onChange={handleChange}
        /><br />
      </div>
      
      <div className='mt-4 p-3 rounded-md  '>
        <label>Password:</label><br />
        <input 
          type='password'
          className='mt-2 w-full p-3 bg-transparent border border-slate-200 rounded-md hover:bg-slate-50'
          placeholder='enter your password'
          name='password'
          value={formInputs.password}
          onChange={handleChange}
        /><br />
      </div>
      <p>No account? <Link to='/register'>Register here</Link></p>
    </form>
  )
}

export default SignInPage