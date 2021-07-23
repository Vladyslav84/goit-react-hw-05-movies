import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import * as api from '../../api/api';


const HomePage = () => {
    // const { url } = useRouteMatch();
    const [movies, setMovies] = useState()

    useEffect(() => {
        api.getPopularMovies().then(moviesArr => setMovies(moviesArr));
    }, [])
    // console.log(movies)
    return (
        <ul>
            {movies && movies.map(movie =>
                <li key={movie.id} >
                    <Link to={`/Movies/${ movie.id }`} className={s.navLinks}>{movie.title}
                    </Link>
                </li>)}
        </ul>
    )

}

export default HomePage;