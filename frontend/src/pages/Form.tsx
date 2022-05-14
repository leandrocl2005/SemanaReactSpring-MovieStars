import { FormEvent, useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

import { Movie } from "../types/movie";
import { BASE_URL } from "../utils/request";
import { validateEmail } from "../utils/validators";

const Form = () => {

  const params = useParams();
  const movieId = Number(params.movieId);
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    score: 0,
    count: 0,
    image: '',
  })

  useEffect(() => {
    async function loadMovie() {
      const response = await axios.get(BASE_URL + `/api/movies/${movieId}/`)
      setMovie(response.data)
    }
    loadMovie()
  }, [movieId])

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    console.log(movieId, typeof movieId)

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'POST',
      url: '/api/score/',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    axios(config).then(response => {
      navigate('/')
    }).catch(error => {
      console.log(error)
    })
    
  }

  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie.image} alt="The Witcher" />
      <div className="dsmovie-card-bottom-container">
          <h3>{movie.title}</h3>
          <form className="dsmovie-form" onSubmit={handleFormSubmit}>
              <div className="form-group dsmovie-form-group">
                  <label htmlFor="email">Informe seu email</label>
                  <input 
                    required
                    type="email" 
                    className="form-control" 
                    id="email" />
              </div>
              <div className="form-group dsmovie-form-group">
                  <label htmlFor="score">Informe sua avaliação</label>
                  <select className="form-control" id="score">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
              </div>
              <div className="dsmovie-form-btn-container">
                  <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
              </div>
          </form >
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
      </div >
    </div>
  )
}

export default Form;