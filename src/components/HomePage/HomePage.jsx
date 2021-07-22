import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './HomePage.module.css';


const HomePage = () => {
    // const { url } = useRouteMatch();
    const [movies, setMovies] = useState()

    useEffect(() => {
        const AUTH_TOKEN =
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';

        axios.defaults.baseURL = 'https://api.themoviedb.org/3';
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        const getPopularMovies = async () => {
            const response = await axios.get(`/trending/movie/day?`);

            return response.data.results;
        }
        getPopularMovies().then(moviesArr => setMovies(moviesArr));

    }, [])
    // console.log(movies)
    return (
        <ul>
            {movies && movies.map(movie =>
                <li key={movie.id} >
                    <Link to={`/Movies/${ movie.id }`} className={s.navLinks}>{movie.title}<span>Popularity</span>{movie.vote_average}
                    </Link>
                </li>)}
        </ul>
    )

}

export default HomePage;