import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/request";
import { Movie, MoviePage } from "../types/movie";

const Listing = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    pageNumber: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

  useEffect(() => {
    async function loadMovies() {
      const response = await axios.get(BASE_URL + `/api/movies/?page=${pageNumber}&ordering=title`)
      const data = response.data as MoviePage;
      setPageNumber(data.pageNumber)
      setPage(data);
      setMovies(data.content)
    }
    loadMovies()
  }, [pageNumber])

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  }

  return (
    <>
      <Pagination 
        page={page} 
        handlePageChange={handlePageChange}
      />

      <div className="container">
        <div className="row">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>
      
    </>
  )
}

export default Listing;