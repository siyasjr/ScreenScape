import React from 'react'
import MovieCard from './components/MovieCard'

const Home = () => {
  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="my-6 w-full flex justify-center">
        <input
          placeholder="Search for movies..."
          className="w-full sm:w-[80%] md:w-[60%] h-10 px-4 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* 🎬 Responsive Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-15">
        {Array(12)
          .fill(null)
          .map((_, idx) => (
            <MovieCard key={idx} />
          ))}
      </div>
    </>
  )
}

export default Home
