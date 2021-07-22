import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import s from './MoviesPage.module.css'

const MoviesPage = () => {
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [inputValue, setInputValue] = useState('')
    const [submitValue, setSubmitValue] = useState('')
    const [film, setFilm] = useState()

    useEffect(() => {
        if (inputValue !== "")
        {
            const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
            axios.defaults.baseURL = 'https://api.themoviedb.org/3';
            axios.defaults.headers.common.Authorization = AUTH_TOKEN;
            const fetchMoviesSearch = async (submitValue) => {
                const response = await axios.get(`/search/movie?api_key=AUTH_TOKEN&language=en-US&query=${ submitValue }&page=1&include_adult=false`);
                return response.data.results;
            }
            fetchMoviesSearch(submitValue).then(res => setFilm(res))
        }
            setInputValue('');

    }, [submitValue])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitValue(inputValue)

    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    console.log(submitValue);
    console.log(film);
    return (
        <>
            <button type="button">Go back</button>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    autoComplete="off"
                    autoFocus
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type='submit'> Search</button>
            </form>

           <ul>
            {film && film.map(film =>
                <li key={film.id} >
                    <Link to={`/Movies/${ film.id }`} className={s.navLinks}>{film.title}<span>Popularity</span>{film.vote_average}
                    </Link>
                </li>)}
            </ul>
        </>

    )

}

export default MoviesPage;