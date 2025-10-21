import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (



        <div className="card bg-base-100 w-full m-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Don,t have an account? <Link to='/register'>Create an account</Link> </p>



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

export default Login;