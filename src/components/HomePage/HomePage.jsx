import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
import * as api from '../../api/api';


const HomePage = () => {
    const [movies, setMovies] = useState();
    const location = useLocation();

    useEffect(() => {
        api.getPopularMovies().then(moviesArr => setMovies(moviesArr));
    }, [])
    // console.log(movies)
    return (
        <ul>
            {movies && movies.map(movie =>
                <li key={movie.id} >
                    <Link to={{
                        pathname: `/Movies/${ movie.id }`,
                        state: { from: location }
                    }} className={s.navLinks}>{movie.title}
                    </Link>
                </li>)}
        </ul>
    )

}

export default HomePage;

