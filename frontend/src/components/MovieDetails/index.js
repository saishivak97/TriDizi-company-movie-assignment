import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
import MoviesList from "../MoviesList";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  //const base_image_url = "https://image.tmdb.org/t/p/w500";

  //const movieDetailsUrlFrontend = `http://localhost:3000/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

  const movieDetailsUrlFrontend = `http://localhost:3000/movie/${id}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(movieDetailsUrlFrontend);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieDetailsUrlFrontend]);

  if (!movie) return <div>Loading...</div>;

  

  const {
    //belongs_to_collection,
    original_title,
    genres,
    overview,
    origin_country,
    production_companies,
    production_countries,
    release_date,
    runtime,
    status,
  } = movie;

  //const { name="collections", poster_path, backdrop_path } = belongs_to_collection;
  const genreArrayList = genres.map((eachgenre) => eachgenre.name);
  const countriesOriginArrayList = origin_country.map(
    (eachCountry) => eachCountry
  );
  const productionCompanyArray = production_companies.map(
    (eachProductionCompany) => eachProductionCompany.name
  );
  const productionCountryArray = production_countries.map(
    (eachProductionCountry) => eachProductionCountry.name
  );

  return (
    <div className="main-movie-details-container">
      
      <div className="movie-details-container">
        <img
          className="movie-detail-poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="all-details-container">
        <h1>Movie Detailed View</h1>
          <div className="main-details-container">
            <p>
              <span className="bold">Title:</span>
              {original_title}
            </p>
            <p>
              <span className="bold">Description:</span>
              {overview}
            </p>
            <p>
              <span className="bold">Budget:</span>
              {movie.budget}
            </p>
            <div className="genre-container">
              <p className="genre-container">
                <span className="bold">Genres:</span>
                {genreArrayList.join(", ")}
              </p>
            </div>

            <div>
              <p>
                <span className="bold">country-origin:-</span>
                {countriesOriginArrayList.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <span className="bold">production_companies:-</span>
                {productionCompanyArray.join(", ")}
              </p>
            </div>

            <div>
              <p>
                <span className="bold">production_countries:-</span>
                {productionCountryArray.join(", ")}
              </p>
            </div>
            <p>
              <span className="bold">release_date:-</span>
              {release_date}
            </p>
            <p>
              <span className="bold">runtime:-</span>
              {runtime}
            </p>
            <p>
              <span className="bold">status:-</span>
              {status}
            </p>
          </div>
          
          
        </div>
        
      </div>
      <MoviesList />
    </div>

  );
};

export default MovieDetails;
