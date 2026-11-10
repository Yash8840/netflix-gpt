import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  if (!movies) return null;

  return (
    <div className="bg-black text-white relative z-30 w-full">
      {/* Reduced negative margin so cards don't overlap the buttons */}
      <div className="-mt-13 md:-mt-24 pl-6 md:pl-12 relative z-40 space-y-6 pb-12">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;