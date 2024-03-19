import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(username,password)
  }


  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto min-w-96 h-screen">
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-800">
        <h1 className="text-3xl font-semibold text-center">
          Login
          <span className="text-blue-500"> ChitChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 mb-4"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <Link to='/signup' className="">
            <span className="underline">Don't have an account? Register Now</span>
          </Link>
          
          <div className="mt-4">
          <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading? <span className="loading loading-spinner"></span>: "Login"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
