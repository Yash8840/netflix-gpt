import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-40 shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={IMG_URL + posterPath}
        alt="Movie Poster"
        className="rounded-md w-full h-52 object-cover"
      />
    </div>
  );
};

export default MovieCard;