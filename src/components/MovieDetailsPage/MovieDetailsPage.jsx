import React, { useState, useEffect } from 'react';
import { NavLink, Route, useParams, useRouteMatch, Switch, useHistory, useLocation } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import Casts from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import noPoster from '../../imagesDef/noposter.png'
import * as api from '../../api/api';

const MovieDetailsPage = () => {
    const location = useLocation();
    const history = useHistory();
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState();

    // const handleGoBack = () => {
    //     history.push('/');
    // }
    console.log('location :>> ', location);
    console.log('history :>> ', history);
    useEffect(() => {
        api.fetchMoviesId(movieId).then(res => setmovieIdObj(res))
        // eslint-disable-next-line 
    }, [])

    return (<>
        {movieIdObj && <>
            <button type="button" >Go back</button>
            <article>
                <img src={imgBasePath + movieIdObj.poster_path !== "https://image.tmdb.org/t/p/w500null" ? imgBasePath + movieIdObj.poster_path : noPoster} alt={movieIdObj.original_title} width="150" ></img>
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
            <hr />
            <>Addition information</>
            <ul className={s.list}>
                <li><NavLink to={`${ url }/сast`}>Casts</NavLink></li>
                <li><NavLink to={`${ url }/reviews`}>Reviews</NavLink></li>
            </ul>
            <Switch>
                <Route path={`${ path }/сast`} exact>
                    <Casts />
                </Route>
                <Route path={`${ path }/reviews`} exact>
                    <Reviews />
                </Route>
            </Switch>
        </>}

    </>
    )

}

export default MovieDetailsPage;

