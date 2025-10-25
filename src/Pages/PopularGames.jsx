import React from 'react';
import useProducts from '../hook/useProduct';
import { Link } from 'react-router';
import Gamescart from './Gamescart';
import Loading from '../Component/Loading';

const PopularGames = () => {
      const {products,loading,error}=useProducts()
    return (
        <div className=' max-w-[1250px] mx-auto mt-10'>
           <div className='text-center'>
  <h1 className='text-5xl font-extrabold mb-5 text-cyan-600 drop-shadow-sm'>
    Popular Games
  </h1>
  <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
    Dive into the world of top-rated indie and trending games hand-picked by <span className="font-semibold text-cyan-700">GameHub</span>.  
    Discover what players are loving right now!
  </p>
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