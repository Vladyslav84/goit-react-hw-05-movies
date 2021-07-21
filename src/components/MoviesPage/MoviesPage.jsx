import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import s from './MoviesPage.module.css'

const MoviesPage = () => {
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [inputValue, setInputValue] = useState('')
    const [submitValue, setSubmitValue] = useState('')
    const [film, setFilm] = useState([])

    useEffect(() => {
        if (inputValue !== "")
        {
            const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
            axios.defaults.baseURL = 'https://api.themoviedb.org/3';
            axios.defaults.headers.common.Authorization = AUTH_TOKEN;
            const fetchMoviesSearch = async (submitValue) => {
                const response = await axios.get(`/search/movie?api_key=AUTH_TOKEN&language=en-US&query=${ submitValue }&page=1&include_adult=false`);
                return response.data;
            }
            fetchMoviesSearch(inputValue).then(res => setFilm(res))
        }
        // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=ggg&page=1&include_adult=false
    }, [submitValue])
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // setSubmitValue(inputValue)
        // setInputValue('');
        console.log(inputValue);
    }

    const handleChange = (e) => {

        setInputValue(e.target.value);
    };
    console.log();
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
        </>

    )

}

export default MoviesPage;