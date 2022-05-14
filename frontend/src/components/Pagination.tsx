import {ReactComponent as Arrow} from '../assets/img/left-arrow-icon.svg'
import { MoviePage } from '../types/movie';

type PaginationProps = {
  page: MoviePage;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination = ({page, handlePageChange}: PaginationProps) => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
          <button 
            className="dsmovie-pagination-button" 
            disabled={page.first}
            onClick={() => handlePageChange(page.pageNumber-1)}
          >
              <Arrow />
          </button>
          <p>{`${page.pageNumber} de ${page.totalPages}`}</p>
          <button 
            className="dsmovie-pagination-button" 
            disabled={page.last} 
            onClick={() => handlePageChange(page.pageNumber + 1)}
          >
              <Arrow className="dsmovie-flip-horizontal" />
          </button>
      </div>
    </div>
  )
}

export default Pagination;