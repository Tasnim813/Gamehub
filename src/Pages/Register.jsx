import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log("clicked")
        const name=e.target.name?.value;
        const photo=e.target.photo?.value;
        const email=e.target.email?.value;
        const password=e.target.password?.value;
        console.log({name,photo,email,password})

    }
    return (
         <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />
                        {/* Photo */}
                        <label className="label">Photo</label>
                        <input type="Photo" name="photo" className="input" placeholder="PhotoURL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='Submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Already have an account? <Link to='/login'>Login</Link> </p>



                </form>
                {/* divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-black/30"></div>
                  <span className="text-sm text-black/70">or</span>
                  <div className="h-px w-16 bg-black/30"></div>
                </div>
                {/* button */}
                <button className="btn bg-black text-white border-black">

                    Login with GitHub
                </button>

            </div>
        </div>
    );
};

export default Register;