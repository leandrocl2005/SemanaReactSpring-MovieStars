import MovieStars from "./MovieStars";

type MovieScoreProps = {
  count: number;
  score: number;
}

const MovieScore = ({score, count}: MovieScoreProps) => {

  return (
    <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MovieStars score={score}/>
        <p className="dsmovie-score-count">{`${count} avaliações`}</p>
    </div>
  )
}

export default MovieScore;