import { ReactComponent as StarFull } from '../assets/img/full-star-icon.svg'
import { ReactComponent as StarHalf } from '../assets/img/half-star-icon.svg'
import { ReactComponent as StarEmpty } from '../assets/img/empty-star-icon.svg'

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

type MovieStarsProps = {
  score: number
}

const MovieStars = ({score}: MovieStarsProps) => {

  const starFills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {
        starFills.map((starFill, index) => {
          if (starFill === 1) {
            return <StarFull key={index}/>
          } else if (starFill === 0.5) {
            return <StarHalf key={index}/>
          } else {
            return <StarEmpty key={index}/>
          }
        })
      }
    </div>
  )
}

export default MovieStars;