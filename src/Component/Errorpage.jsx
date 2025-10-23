import React from 'react';
import Navbar from '../Componenet/Navbar';
import Footer from '../Componenet/Footer';
import page from '../assets/error-404.png'
// import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* <Navbar></Navbar> */}
            <div className='flex-1 '>
               <div className=' justify-center '>
                 <div className='flex justify-center'>
                <img src={page} alt="" />
                </div>
                <h1 className=' text-center text-5xl font-bold'>Oops, page not found!</h1>
                <p className='text-center text-gray-500 mt-5'>The page you are looking for is not available.</p>
                 <div className='flex justify-center'>
                     {/* <Link to='/' className='btn mt-5 mb-10 bg-linear-to-t from-[#9F62F2] to-[#632EE3]'>Go Back</Link> */}
                 </div>

               </div>
            </div>
            {/* <Footer ></Footer>  */}
            
        </div>
    );
};

export default ErrorPage;