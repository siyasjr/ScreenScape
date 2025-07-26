'use client'

import React, {createContext, useContext, useState, useEffect} from "react"
interface Movie{
    id: number
    title: string
    release_date: string
    poster_path : string
}

interface MovieContextType {
    favorites: Movie[]
    toggleFavorite: (movie:Movie) => void
    isFavorite: (id:number) => boolean    
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (movie: Movie) => {
    setFavorites(prev =>
      prev.find(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie]
    )
  }

  const isFavorite = (id: number) => favorites.some(m => m.id === id)

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => {
  const context = useContext(MovieContext)
  if (!context) throw new Error('useMovies must be used within MovieProvider')
  return context
}
