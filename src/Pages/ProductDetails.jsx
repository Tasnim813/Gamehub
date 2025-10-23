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

    
  <div className='w-11/12 m-auto'>
    <h1>Games Details</h1>
    <GameCartDetails game={game}></GameCartDetails>

    </div>
  );
};

export default ProductDetails;
