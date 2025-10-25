import React, { useState, useContext } from 'react';

import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router';


const Register = () => {
     const navigate=useNavigate()
    const [show, setShow] = useState(false);
    const { createUserWithEmailAndPasswordfunc,setUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name?.value;
        const photoURL = e.target.photo?.value;
        const email = e.target.email?.value;
        const password = e.target.password?.value;

        // Name validation
        if (displayName.length < 5) {
            toast.error('Name must be at least 5 characters');
            return;
        }

        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must have at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must have at least one lowercase letter.');
            return;
        }

        createUserWithEmailAndPasswordfunc(email, password)
            .then((result) => {
                const user = result.user;

                // Update profile
                updateProfile(user, {
                    displayName: displayName,
                    photoURL: photoURL
                })
                    .then(() => {
                        sendEmailVerification(user)
                            .then(() => {
                                toast.success('Check your email and verify your account!');
                            })
                            // sign out
                            signOut(auth)
                                  .then(() => {
                                    toast.success('Signout Successfully');
                                    setUser(null);
                                    navigate('/login')
                                  })
                            .catch((error) => toast.error(error.message));
                    })
                    .catch((error) => toast.error(error.message));
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("User already exists in the database");
                } else {
                    toast.error(error.message);
                }
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card  w-full max-w-sm shadow-2xl "
            >
                
                <div>
                    <h1 className='text-white text-4xl mb-5 font-bold text-center'>Register Now!!</h1>
                    <div className="card-body rounded-2xl bg-gray-800 space-y-4">
                    <h2 className="text-2xl font-bold text-cyan-400 text-center mb-2">Create Account</h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Name */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-gray-300 font-semibold">Name</label>
                            <input type="text" name="name" required 
                                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                placeholder="Name" />
                        </div>

                        {/* Photo */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-gray-300 font-semibold">Photo URL</label>
                            <input type="url" name="photo" required 
                                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                placeholder="Photo URL" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-gray-300 font-semibold">Email</label>
                            <input type="email" name="email" required
                                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                placeholder="Email" />
                        </div>

                        {/* Password */}
                        <div className="relative flex flex-col space-y-1">
                            <label className="text-gray-300 font-semibold">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" required
                                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400" 
                                placeholder="Password" />
                            <span onClick={() => setShow(!show)} 
                                  className='absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-cyan-400'>
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <button type='submit' 
                                className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg transition-all">
                            Register
                        </button>
                    </form>

                    <p className="text-center text-gray-300 text-sm">
                        Already have an account? <Link className="text-cyan-400 hover:text-cyan-300" to='/login'>Login</Link>
                    </p>
                </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Register;


// import React, { use, useState } from 'react';
// import { Link } from 'react-router';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../Context/AuthContext';
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { sendEmailVerification, updateProfile } from 'firebase/auth';
// import { auth } from '../Firebase/Firebase';

// const Register = () => {
//     const [show,setShow]=useState(false)
//     const { createUserWithEmailAndPasswordfunc } = use(AuthContext)
//     const handleRegister = (e) => {
//         e.preventDefault()
//         console.log("clicked")
//         const displayName = e.target.name?.value;
//         const photoURL = e.target.photo?.value;
//         const email = e.target.email?.value;
//         const password = e.target.password?.value;
//         console.log({ displayName, photoURL, email, password })
//         // Name validation
//         if (displayName.length < 5) {
//             toast.error('Name at lest 5 chacter')
//             return;
//         }
//         // password validation
//         if (password.length < 6) {
//             toast.error('Password must be at least 6 characters long.')
//             return;
//         }
//         if (!/[A-Z]/.test(password)) {
            
//             toast.error("Password must have at least one uppercase letter.");
//             return;
//         }
//         if (!/[a-z]/.test(password)) {
//             toast.error('Password must have at least one lowercase letter.')
//             return;
//         }
// createUserWithEmailAndPasswordfunc(email, password)
//   .then((result) => {
//     const user = result.user;

//     // ✅ Step 1: Update profile
//     updateProfile(user, {
//       displayName: displayName, 
//       photoURL: photoURL,   
//     })
//       .then(() => {
//         // ✅ Step 2: Send verification email
//         sendEmailVerification(user)
//           .then(() => {
//             toast.success('Check your email and validate your account!');
//           })
//           .catch((error) => {
//             console.log("Verification Error:", error.message);
//             toast.error(error.message);
//           });
//       })
//       .catch((error) => {
//         console.log("Profile Update Error:", error.message);
//         toast.error(error.message);
//       });
//   })
//   .catch((error) => {
//     console.log("Register Error:", error.code);
//     if (error.code === "auth/email-already-in-use") {
//       toast.error("User already exists in the database");
//     } else {
//       toast.error(error.message);
//     }
//   });

       
//     }

//     return (
//         <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
//             <div className="card-body">
//                 <form onSubmit={handleRegister}>
//                     <fieldset className="fieldset">
//                         {/* Name */}
//                         <label className="label">Name</label>
//                         <input type="text" required name="name" className="input" placeholder="Name" />
//                         {/* Photo */}
//                         <label className="label">Photo</label>
//                         <input type="Photo" required name="photo" className="input" placeholder="PhotoURL" />
//                         {/* email */}
//                         <label className="label">Email</label>
//                         <input type="email" required name="email" className="input" placeholder="Email" />
//                         {/* password */}
//                        <div className='relative'>
//                          <label className="label">Password</label>
//                         <input type={show? 'text':'password'}
//                          required name="password" className="input" placeholder="Password" />
//                          <span onClick={()=>setShow(!show)} className='absolute right-[28px] top-[33px] cursor-pointer z-50'>
                      
//                       {show?  <FaEye />: <FaEyeSlash />}
//                          </span>
//                        </div>

//                         <button type='Submit' className="btn btn-neutral mt-4">Login</button>
//                     </fieldset>
//                     <p>Already have an account? <Link to='/login'>Login</Link> </p>



//                 </form>



//             </div>
//         </div>
//     );
// };

// export default Register;