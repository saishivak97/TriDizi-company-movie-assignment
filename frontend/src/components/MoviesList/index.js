import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
//import Paginations from '../Paginations';
//import Pagination from 'rc-pagination';

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./index.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `http://localhost:3000/movies?page=${page}`
      );
      setMovies(response.data);
      // Assume totalPages is a known value or fetched from the backend
      setTotalPages(100);
    };

    fetchMovies();
  }, [page]);
  /*
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  */

  const handleChange = (event, value) => {
    setPage(value);
  };

  /*
  const handlePage = (page,totalPages) =>{
    setPage(page)
    setTotalPages(totalPages)
  }
    */

  return (
    <div>
      <div >
        <Stack spacing={2} className="pagination">
          <Typography>Page: {page}</Typography>
          <Pagination  count={totalPages} page={page} onChange={handleChange} />
        </Stack>
      </div>

      <ul className="movies-list-container scrolling">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
