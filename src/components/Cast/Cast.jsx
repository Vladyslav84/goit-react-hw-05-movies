import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Casts = () => {
    const { movieId } = useParams();
    console.log(movieId)
    // // const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    // const [movieIdObj, setmovieIdObj] = useState();
    // useEffect(() => {
    //     const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
    //     axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    //     axios.defaults.headers.common.Authorization = AUTH_TOKEN;
    //     const fetcCastsId = async (movieId) => {
    //         const response = await axios.get(`/movie/${movieId}/credits?api_key=AUTH_TOKEN&language=en-US`);
    //         return response.data;
    //     }
    //     fetcCastsId(movieId).then(res => setmovieIdObj(res));
    // }, [movieId]);

    return (
        <>
            <h3>Casts{ movieId}</h3>
        </>
    )
};

export default Casts;