import React from 'react'
import HeartButton from './FavButton'

const MovieCard = () => {
  return (
    <div className="w-full max-w-[180px] h-72 bg-base-200 shadow-md rounded-lg overflow-hidden relative mx-auto">
      {/* Poster */}
      <div className="relative h-[75%] w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
        <HeartButton />
      </div>

      {/* Title & Info */}
      <div className="px-2 py-2 h-[25%]">
        <h2 className="text-md font-semibold truncate">Movie Title</h2>
        <p className="text-sm text-gray-500">Release Date</p>
      </div>
    </div>
  )
}

export default MovieCard
