// app/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import { getPopularMovies, searchMovies } from './api'

interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    getPopularMovies().then((data) => setMovies(data.results))
  }, [])

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim()) {
      const data = await searchMovies(value)
      setMovies(data.results)
    } else {
      const data = await getPopularMovies()
      setMovies(data.results)
    }
  }

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="my-6 w-full flex justify-center">
        <input
          placeholder="Search for movies..."
          value={query}
          onChange={handleSearch}
          className="w-full sm:w-[80%] md:w-[60%] h-10 px-4 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* 🎬 Responsive Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-15">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default Home
