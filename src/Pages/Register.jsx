import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [show,setShow]=useState(false)
    const { createUserWithEmailAndPasswordfunc } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        console.log("clicked")
        const name = e.target.name?.value;
        const photo = e.target.photo?.value;
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log({ name, photo, email, password })
        // Name validation
        if (name.length < 5) {
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
            .then(result => {
                console.log(result.user)
                toast.success('Succesfully login')

            })
            .catch(error => {
                console.log(error.code)
                
                if(error.code=='auth/email-already-in-use'){
                    toast.error('user already exist in database')
                }
            })

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

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='Submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Already have an account? <Link to='/login'>Login</Link> </p>



                </form>



            </div>
        </div>
    );
};

export default Register;