import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Casts = () => {
    const { movieId } = useParams();
    console.log(movieId)
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState();
    useEffect(() => {
        const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
        axios.defaults.baseURL = 'https://api.themoviedb.org/3';
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;
        const fetcCastsId = async (movieId) => {
            const response = await axios.get(`/movie/${ movieId }/credits?api_key=AUTH_TOKEN&language=en-US`);
            return response.data.cast;
        }
        fetcCastsId(movieId).then(res => setmovieIdObj(res));
    }, [movieId]);
    console.log(movieIdObj);
    return (
        <ul>
            {movieIdObj && movieIdObj.map(castItem =>
                <li key={castItem.id}>
                    <img src={imgBasePath + castItem.profile_path} width="50" alt={castItem.name}></img>
                    <p>{castItem.name}</p>
                    <p>{castItem.character}</p>
                </li>)}

        </ul>
    )
};

export default Casts;