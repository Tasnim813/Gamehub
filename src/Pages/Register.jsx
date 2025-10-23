import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const Register = () => {
    const [show,setShow]=useState(false)
    const { createUserWithEmailAndPasswordfunc } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        console.log("clicked")
        const displayName = e.target.name?.value;
        const photoURL = e.target.photo?.value;
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log({ displayName, photoURL, email, password })
        // Name validation
        if (displayName.length < 5) {
            toast.error('Name at lest 5 chacter')
            return;
        }
        // password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            
            toast.error("Password must have at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must have at least one lowercase letter.')
            return;
        }
createUserWithEmailAndPasswordfunc(email, password)
  .then((result) => {
    const user = result.user;

    // ✅ Step 1: Update profile
    updateProfile(user, {
      displayName: displayName, 
      photoURL: photoURL,   
    })
      .then(() => {
        // ✅ Step 2: Send verification email
        sendEmailVerification(user)
          .then(() => {
            toast.success('Check your email and validate your account!');
          })
          .catch((error) => {
            console.log("Verification Error:", error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log("Profile Update Error:", error.message);
        toast.error(error.message);
      });
  })
  .catch((error) => {
    console.log("Register Error:", error.code);
    if (error.code === "auth/email-already-in-use") {
      toast.error("User already exists in the database");
    } else {
      toast.error(error.message);
    }
  });

       
    }

    return (
        <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" required name="name" className="input" placeholder="Name" />
                        {/* Photo */}
                        <label className="label">Photo</label>
                        <input type="Photo" required name="photo" className="input" placeholder="PhotoURL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" required name="email" className="input" placeholder="Email" />
                        {/* password */}
                       <div className='relative'>
                         <label className="label">Password</label>
                        <input type={show? 'text':'password'}
                         required name="password" className="input" placeholder="Password" />
                         <span onClick={()=>setShow(!show)} className='absolute right-[28px] top-[33px] cursor-pointer z-50'>
                      
                      {show?  <FaEye />: <FaEyeSlash />}
                         </span>
                       </div>

                        <button type='Submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Already have an account? <Link to='/login'>Login</Link> </p>



                </form>



            </div>
        </div>
    );
};

export default Register;