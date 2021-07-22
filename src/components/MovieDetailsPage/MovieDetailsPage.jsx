import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import Casts from '../Cast/Cast';

const MovieDetailsPage = () => {
    const { url,path  } = useRouteMatch();
    const { movieId } = useParams();
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState();
 console.log(url);
    useEffect(() => {
        const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
        axios.defaults.baseURL = 'https://api.themoviedb.org/3';
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;
        const fetchMoviesId = async (movieId) => {
            const response = await axios.get(`/movie/${ movieId }?api_key=AUTH_TOKEN&language=en-US`);
            return response.data;
        }
        fetchMoviesId(movieId).then(res => setmovieIdObj(res))

    }, [])

    return (<>
       
    {movieIdObj &&
            <article>
                <img src={imgBasePath + movieIdObj.poster_path} alt={movieIdObj.original_title} width="150" ></img>
                <ul>
                    <li><h2>{movieIdObj.original_title}</h2>
                    </li>
                    <li><p>User score: {movieIdObj.vote_average}</p>
                    </li>
                    <li><h4>Overview: </h4>
                        <p>{movieIdObj.overview}</p>
                    </li>
                    <li><p>Genres:</p>
                        <ul>{movieIdObj.genres.map(genre => <li key={genre.name}>{genre.name}</li>)}</ul>
                    </li>
                </ul>
            </article>
        }
    {movieIdObj && 
    <>
    <hr />
        <>Addition information</>
        <ul className={s.list}>
                <li><NavLink to={`${url}/Casts`}>Casts</NavLink></li>
            <li><NavLink to={`${url}`}>Reviews</NavLink></li>
        </ul>
            <Route path={`${url}/Casts`}exact>
            <Casts />
            </Route>
    </>}
   
     </>
)

}

export default MovieDetailsPage;