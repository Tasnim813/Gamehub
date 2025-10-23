import React from 'react';
import useProducts from '../hook/useProduct';
import { Link } from 'react-router';
import Gamescart from './Gamescart';
import Loading from '../Component/Loading';

const PopularGames = () => {
      const {products,loading,error}=useProducts()
    return (
        <div className=' max-w-[1250px] mx-auto mt-10'>
            <div className='text-center '>
                <h1 className=' text-5xl font-bold mb-5'>Popular Games</h1>
                <p className='text-lg text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
          {loading ? <Loading></Loading> : error? <ErrorPage></ErrorPage>:<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20'>
             {
                
               products.map(product=> <Gamescart  key={product.id} product={product}></Gamescart> )
            }
           </div> }
           <div className='mt-10 max-w-[1250px] mx-auto   text-center'>
           </div>
        </div>
        
    );
};

export default PopularGames;