import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'


const Signup = () => {

  const [input , setInput]  = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup} = useSignUp()



  const handleCheckBoxChange = (gender) =>{
    setInput({...input,gender})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(input);
    
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto min-w-96 h-screen">
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-800">
        <h1 className="text-3xl font-semibold text-center">
          Register
          <span className="text-blue-500"> ChitChat</span>
        </h1>

        <form onSubmit={handleSubmit}>

        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full input input-bordered h-10"
              value={input.fullName}
              onChange={(e)=> setInput({...input, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e)=> setInput({...input, username: e.target.value})}
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e)=> setInput({...input, password: e.target.value})}
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={(e)=> setInput({...input, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender}/>

          <Link to="/login" className="">
            <span className='underline'>Already have an account? Login Now</span>
          </Link>
          
          <div className='mt-4'>
          <button type='submit' className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading? <span className='loading loading-spinner'></span> : "Register"}
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup