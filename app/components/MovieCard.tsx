

import { title } from 'process';
import React from 'react'
import HeartButton from './FavButton';



const MovieCard = () => {
  return (



 /*   <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" // movie_poster_path
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Movie Title</h2>
    <p>Release Date</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div> */


<div className="w-64 h-96 bg-base-200 shadow-md rounded-lg overflow-hidden relative">
  
  <div className="relative h-[80%] w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Movie Poster"
      className="w-full h-full object-cover rounded-t-lg"
    />
    
    
<HeartButton />


  </div>

 
  <div className="p-4 h-[20%]">
    <h2 className="card-title text-lg font-semibold">Movie Title</h2>
    <p className="text-sm text-gray-500">Some info here</p>
  </div>
</div>


  )
}

export default MovieCard


