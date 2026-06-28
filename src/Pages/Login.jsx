import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const[error,setError]=useState([]);
    const {signIn,setUser}=use(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        signIn(email,password)
        .then(result=>{
            alert('log in successfully');
            const user=result.user;
            setUser(user);
            navigate(`${location.state?location.state:"/"}`);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    return (
      <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
                <h2 className='font-semibold text-2xl text-center'>
                    Login Your Account
                </h2>
              <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email required" />
                  <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password required" />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  {
                    error && <p className='text-red-500 text-xs'>{error}</p>
                  }
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p className='font-semibold text-center py-5'>Don't have an account? <Link className='text-secondary hover:underline' to='/auth/register'>Register</Link></p>
                </form>
              </div>
            </div>
          </div>
    );
};

export default Login;