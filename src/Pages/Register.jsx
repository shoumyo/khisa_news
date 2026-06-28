import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const[nameError,setNameError]=useState("");
    const{createUser,setUser,updateUser}=use (AuthContext);

    const navigate=useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if(name.length<5){
        setNameError("Name should be at least 5 character");
        return;
    }
    else{
        setNameError("");
    }
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email,password)
    .then(result=>{
        const user=result.user;
        updateUser({displayName:name,photoURL:photo})
        .then(()=>{

        })
        .catch(error=>{
            alert(error);
        })
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate("/");
    })
    .cathch(error=>{
        const errorMessage=error.message;
        alert(errorMessage);
    })
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required/>
            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URL" required/>
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            {
                nameError && <p className='text-red-500 text-xs'>{nameError}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center py-5">
              Already have an account?
              <Link className="text-secondary hover:underline" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
