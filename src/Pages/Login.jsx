import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {  signOut } from "firebase/auth";
import { auth } from '.././Firebase/Firebase';
const Login = () => {
    
    const [show,setShow]=useState(false)
    const { signInWithEmailAndPasswordfunc,signInWithPopupfunc,user,setUser } = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log({ email, password })
        signInWithEmailAndPasswordfunc(email,password)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
            toast.success('Successfully login')
        })
        .catch(error=>{
            
            console.log(error.code)
            toast.error(error.code)
        })

    }
    const handleGoogleSignIn=()=>{
        console.log("google clicked")
        signInWithPopupfunc ()
        .then(result=>{
            setUser(result.user)
            console.log(result.user)
            toast.success("successfully sign in")
        })
        .catch(error=>{
            console.log(error.message)
            toast.error(error.message)
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            toast.success('Signout Succesfully')
            setUser(null)
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
console.log(user)
    return (



        <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                {user ? (<div className='text-center space-y-3'>
                    <img src={user ?.photoURL || 'https://via.plaseholder.com/88'} className='h-20 w-20 rounded-full  mx-auto' alt="" />
                    <h1 className='text-xl font-bold'>{user?.email}</h1>
                    <p className='text-xl font-bold'>{user?.displayName}</p>
                    <button onClick={handleSignOut} className='btn btn-primary'>Sign out</button>

                </div>):(<form onSubmit={handleSignIn}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <div className='relative'>
                            <label className="label">Password</label>
                        <input  type={ show? 'text':'password'}
                        name='password' className="input" placeholder="Password" />
                        <span onClick={()=>setShow(!show)} className='absolute right-[28px] top-[33px] cursor-pointer z-50'>
                            {show? <FaEye></FaEye> :<FaEyeSlash/> }

                        </span>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Don,t have an account? <Link to='/register'>Create an account</Link> </p>
   <div className="flex items-center justify-center gap-2 my-2">
                    <div className="h-px w-16 bg-black/30"></div>
                    <span className="text-sm text-black/70">or</span>
                    <div className="h-px w-16 bg-black/30"></div>
                </div>
                {/* button */}
                <button onClick={handleGoogleSignIn} className="btn bg-black text-white border-black">

                    Login with Google
                </button>


                </form>)}
              
             

            </div>
        </div>

    );
};

export default Login;