import { Link } from 'react-router-dom'

import { Movie } from "../types/movie";
import MovieScore from "./MovieScore"

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({movie}: MovieCardProps) => {

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-3">
        <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
        <div className="dsmovie-card-bottom-container">
            <h3>{movie.title}</h3>
            <MovieScore count={movie.count} score={movie.score}/>
            <Link to={`/form/${movie.id}`}>
              <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </Link>
        </div>
    </div>
  )
}

export default MovieCard;