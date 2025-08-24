import React from 'react'
import HeartButton from './FavButton'
import Image from 'next/image'
import { useMovies } from '../contexts/MovieContext'

interface MovieProps {
  movie: {
    id: number
    title: string
    release_date: string
    poster_path: string
  }
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useMovies()

  return (
    <div className="w-full max-w-[180px] h-72 bg-base-200 shadow-md rounded-lg overflow-hidden relative mx-auto">
      {/* Poster */}
      <div className="relative h-[75%] w-full">
        <Image
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/placeholder.png'}
          alt={movie.title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => toggleFavorite(movie)}
          className="absolute top-2 right-2"
        >
          <HeartButton filled={isFavorite(movie.id)} />
        </button>
      </div>

      {/* Title & Info */}
      <div className="px-2 py-2 h-[25%]">
        <h2 className="text-md font-semibold truncate">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
