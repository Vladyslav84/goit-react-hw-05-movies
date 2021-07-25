import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import s from './MoviesPage.module.css'
import * as api from '../../api/api';

const MoviesPage = () => {
    const location = useLocation();
    const history = useHistory();
    const [submitValue, setSubmitValue] = useState('')
    const [film, setFilm] = useState([])

    useEffect(() => {
        if (submitValue !== "")
        {
            api.fetchMoviesSearch(submitValue).then(res => setFilm(res))
        }

    }, [submitValue])

    useEffect(() => {
        if (location.search.slice(7) !== submitValue)
        {
            api.fetchMoviesSearch(location.search.slice(7)).then(res => setFilm(res));

        }

        // eslint-disable-next-line 
    }, [location.search.slice(7)])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitValue(evt.target.elements.inputName.value)
        history.push(`/Movies/?query=${ evt.target.elements.inputName.value }`)
        evt.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    autoComplete="off"
                    autoFocus
                    name="inputName"
                />
                <button type='submit'> Search</button>
            </form>

            <ul>
                {film && film.map(film =>
                    <li key={film.id} >
                        <Link to={{
                            pathname: `/Movies/${ film.id }`,
                            state: { params: `/Movies/?query=${ location.search.slice(7) }` },

                        }} className={s.navLinks}>{film.title}
                        </Link>
                    </li>)}
            </ul>
        </>

    )

}

export default MoviesPage;