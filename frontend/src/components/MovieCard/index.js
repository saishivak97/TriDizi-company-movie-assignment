import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
    <li className ="movie-card-container">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='poster'/>
    </li>
    </Link>
  );
};

export default MovieCard;
