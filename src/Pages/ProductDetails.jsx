import React, { useEffect, useState } from 'react';
import useProducts from '../hook/useProduct';
import Loading from '../Component/Loading';
import GameCartDetails from './GameCartDetails';
import { useLoaderData, useParams } from 'react-router';


const ProductDetails = () => {
  const [game,setGame]=useState({})
  const data=useLoaderData()

  const {id}=useParams()
  console.log(id,data,game)
  useEffect(()=>{
    const gameDetails=data.find((game)=>game.id==id)
    setGame(gameDetails)

  },[data,id])

  return (

    <div className="w-11/12 mx-auto my-12">
  <h1 className="text-3xl text-center sm:text-4xl font-extrabold text-cyan-400 drop-shadow-md mb-8">
    Games Details
  </h1>

  <GameCartDetails game={game} />
</div>

  
  );
};

export default ProductDetails;
