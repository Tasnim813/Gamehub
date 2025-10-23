import React, { useContext, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from '.././Firebase/Firebase';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const googleprovider = new GoogleAuthProvider();

const Login = () => {
    const [show, setShow] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const emailRef = useRef(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        signInWithEmailAndPassword(auth,email, password)
            .then(result => {
               if(!result.user?.emailVerified){
                toast.error('Your email is not verified');
                return ;
               }
                setUser(result.user);
                toast.success('Successfully login');
            })
            .catch(error => {
                toast.error(error.code);
            });
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth,googleprovider)
        .then((result)=>{
            setUser(result.user);
            toast.success("Successfully Login");
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }

  
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth,email)
        .then(()=> toast.success('Check your email to reset password'))
        .catch(e=> toast.error(e.message));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="card bg-gray-800 w-full max-w-sm shadow-2xl rounded-2xl"
            >
                <div className="card-body">
                   
                        <form onSubmit={handleSignIn} className="space-y-4">
                            <div className="flex flex-col space-y-1">
                                <label className="text-gray-300 font-semibold">Email</label>
                                <input type="email" ref={emailRef} name='email' 
                                       className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                       placeholder="Email" 
                                />
                            </div>

                            <div className="relative flex flex-col space-y-1">
                                <label className="text-gray-300 font-semibold">Password</label>
                                <input type={show ? 'text' : 'password'} name='password'
                                       className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                       placeholder="Password" 
                                />
                                <span onClick={() => setShow(!show)} 
                                      className='absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-cyan-400'>
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>

                            <div className="text-right">
                                <button type='button' onClick={handleForgetPassword} 
                                        className="text-sm text-cyan-400 hover:text-cyan-300 link">
                                    Forgot password?
                                </button>
                            </div>

                            <button type='submit' 
                                    className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg transition-all">
                                Login
                            </button>

                            <p className="text-center text-gray-300 text-sm">
                                Don't have an account? <Link className="text-cyan-400 hover:text-cyan-300" to='/register'>Create an account</Link>
                            </p>

                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-gray-600"></div>
                                <span className="text-sm text-gray-400">or</span>
                                <div className="h-px w-16 bg-gray-600"></div>
                            </div>

                            <button onClick={handleGoogleSignIn} 
                                    className="btn w-full bg-gray-800 hover:bg-gray-700 border border-cyan-400 text-cyan-400 hover:text-white font-semibold transition-all shadow-md">
                                Login with Google
                            </button>
                        </form>
               
                </div>
            </motion.div>
        </div>
    );
};

export default Login;


// import React, { useContext, useRef, useState } from 'react';
// import { Link } from 'react-router';
// import { AuthContext } from '../Context/AuthContext';
// import { toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { auth } from '.././Firebase/Firebase';
// import { GoogleAuthProvider } from "firebase/auth";

// const googleprovider = new GoogleAuthProvider();
// const Login = () => {

//     const [show, setShow] = useState(false)
//     const { user, setUser } = useContext(AuthContext)
//     const emailRef=useRef(null)
//     const handleSignIn = (e) => {
//         e.preventDefault()
//         const email = e.target.email?.value;
//         const password = e.target.password?.value;
//         console.log({ email, password })
//         signInWithEmailAndPassword(auth,email, password)
//             .then(result => {
//                 console.log(result.user)
//                if(!result.user?.emailVerified){
//                 toast.error('Your email is not verified')
//                 return ;
//                }
//                 console.log(result.user)
//                 setUser(result.user)
//                 toast.success('Successfully login')
//             })
//             .catch(error => {

//                 console.log(error.code)
//                 toast.error(error.code)
//             })

//     }
//     const handleGoogleSignIn = (e) => {
//         e.preventDefault()
//         console.log("google clicked")
//         signInWithPopup(auth,googleprovider)
//         .then((result)=>{
//             console.log(result.user)
//             toast.success("Succesfully Login")
//         })
//         .catch(error=>{
//             console.log(error.message)
//             toast.error(error.message)
//         })
//     }
//     const handleSignOut = () => {
//         signOut(auth)
//             .then(result => {
//                 toast.success('Signout Succesfully')
//                 setUser(null)
//             })
//             .catch(error => {
//                 toast.error(error.message)
//             })
//     }
//     const handleForgetPassword=(e)=>{
//         const email=emailRef.current.value;
//         sendPasswordResetEmail(auth,email)
//         .then(()=>{
//             toast.success('Check your email to reset password')

//         })
//         .catch((e)=>{
//             toast.error(e.message)
//         })
//     }
//     console.log(user)
//     return (



//         <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
//             <div className="card-body">
//                 {user ? (<div className='text-center space-y-3'>
//                     <img src={user?.photoURL || 'https://via.plaseholder.com/88'} className='h-20 w-20 rounded-full  mx-auto' alt="" />
//                     <h1 className='text-xl font-bold'>{user?.email}</h1>
//                     <p className='text-xl font-bold'>{user?.displayName}</p>
//                     <button onClick={handleSignOut} className='btn btn-primary'>Sign out</button>

//                 </div>) : (<form onSubmit={handleSignIn}>
//                     <fieldset className="fieldset">
//                         <label className="label">Email</label>
//                         <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
//                         <div className='relative'>
//                             <label className="label">Password</label>
//                             <input type={show ? 'text' : 'password'}
//                                 name='password' className="input" placeholder="Password" />
//                             <span onClick={() => setShow(!show)} className='absolute right-[28px] top-[33px] cursor-pointer z-50'>
//                                 {show ? <FaEye></FaEye> : <FaEyeSlash />}

//                             </span>
//                         </div>
//                         <div><a onClick={handleForgetPassword} className="link link-hover" type='button'>Forgot password?</a></div>

//                         <button type='submit' className="btn btn-neutral mt-4">Login</button>
//                     </fieldset>
//                     <p>Don,t have an account? <Link to='/register'>Create an account</Link> </p>
//                     <div className="flex items-center justify-center gap-2 my-2">
//                         <div className="h-px w-16 bg-black/30"></div>
//                         <span className="text-sm text-black/70">or</span>
//                         <div className="h-px w-16 bg-black/30"></div>
//                     </div>
//                     {/* button */}
//                     <button onClick={handleGoogleSignIn} className="btn bg-black text-white border-black">

//                         Login with Google
//                     </button>


//                 </form>)}



//             </div>
//         </div>

//     );
// };

// export default Login;