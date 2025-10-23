import React from 'react';
import { Link } from 'react-router';

const Gamescart = ({product}) => {
    const {coverPhoto,category,ratings ,developer,id} = product
    return (
   
              <Link to={`/product/${id}`}>
             <div className="card bg-base-100  shadow-sm p-5 hover:scale-105 transition ease-in-out ">
                <figure className='h-50'>
                    <img className='rounded-xl object-cover'
                        src={coverPhoto}
                        alt="Shoes" />
                </figure>
                <p>category:{category}</p>
                <div className='flex justify-between'>
                    <div className='flex btn text-[#00D390]'>
                      {/* <img className='w-5 h-5' src={down} alt="" /> */}
                        <p className=''>{ratings}</p>
                    </div>
                    <div className='flex btn text-[#FF8811]'>
                        {/* <img className='w-5 h-5' src={star} alt="" /> */}
                        <p className=''>{developer}</p>
                    </div>
                </div>

            </div>
              </Link>
       
    );
};

export default Gamescart;