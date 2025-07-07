import { title } from 'process';
import React from 'react'



const MovieCard = () => {
  return (



    <div className="card bg-base-100 w-96 shadow-sm">
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
</div>
  )
}

export default MovieCard