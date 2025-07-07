import React from 'react'
import MovieCard from './components/MovieCard'

const sampleMovies = [
  {
    id: 1,
    title: 'Inception',
    poster_path: '/qwe.jpg',
    release_date: '2010-07-16',
  },
  {
    id: 2,
    title: 'Interstellar',
    poster_path: '/asd.jpg',
    release_date: '2014-11-07',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster_path: '/zxc.jpg',
    release_date: '2008-07-18',
  },
  {
    id: 4,
    title: 'Tenet',
    poster_path: '/tenet.jpg',
    release_date: '2020-08-26',
  },
];


const Home = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      {sampleMovies.map((movie) => (
        <div key={movie.id} className="w-[calc(25%-1rem)]">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
  
}

export default Home