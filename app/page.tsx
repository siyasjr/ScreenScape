import React from 'react'
import MovieCard from './components/MovieCard'

const Home = () => {
  return (
    <>
  <div className='my-4 mx-4 flex justify-center items-center'> 

    <input placeholder='  search for movies...' className='w-100 h-10 border-1 rounded-sm '></input>
  </div>
    

   
    
    <div className=' flex flex-wrap my-10 h-screen flex-row justify-between items-center gap-2'> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> 
    <MovieCard/> </div>

    </>
    

  )
}

export default Home