import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
    NavLink,
    Route,
    useParams,
    useRouteMatch,
    Switch,
    useHistory,
    useLocation

} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
// import Casts from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import noPoster from '../../imagesDef/noposter.png'
import * as api from '../../api/api';

const Casts = lazy(() => import('../Cast/Cast.jsx' /* webpackChunkName: "Casts" */));
const Reviews = lazy(() => import('../Reviews/Reviews.jsx' /* webpackChunkName: "Reviews" */));

export default function MovieDetailsPage() {

    const routerState = useRef(null);
    const location = useLocation();
    const history = useHistory();
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const imgBasePath = 'https://image.tmdb.org/t/p/w500'
    const [movieIdObj, setmovieIdObj] = useState();

    useEffect(() => {
        if (!routerState.current)
            routerState.current = location.state;
        // eslint-disable-next-line 
    }, []);


    const handleGoBack = () => {
        history.push(routerState.current.params ?? '/');
    }

    useEffect(() => {
        api.fetchMoviesId(movieId).then(res => setmovieIdObj(res))

        // eslint-disable-next-line 
    }, [])

    return (<>
        {movieIdObj && <>
            <button type="button" onClick={handleGoBack}>Go back</button>
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
            <Suspense fallback={<p>loading...</p>}>
                <Switch>
                    <Route path={`${ path }/сast`} exact>
                        <Casts />
                    </Route>
                    <Route path={`${ path }/reviews`} exact>
                        <Reviews />
                    </Route>
                </Switch>
            </Suspense>
        </>}

    </>
    )

}

// export default MovieDetailsPage;

