import React, { useState, useEffect } from 'react';

import axios from 'axios';


const HomePage = () => {

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
        getPopularMovies().then().then(moviesArr => setMovies(moviesArr));

    }, [])

    return (
        <>
            {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </>
    )

}

export default HomePage;