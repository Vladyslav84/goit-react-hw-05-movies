import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import s from './MoviesPage.module.css'
import * as api from '../../api/api';

const MoviesPage = () => {
    const history = useHistory();
    const [submitValue, setSubmitValue] = useState('')
    const [film, setFilm] = useState([])

    useEffect(() => {
        if (submitValue !== "")
        {
            api.fetchMoviesSearch(submitValue).then(res => setFilm(res))
        }

        // eslint-disable-next-line 
    }, [submitValue])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitValue(evt.target.elements.inputName.value)
        history.push(`/Movies/?query=${ evt.target.elements.inputName.value }`)
        evt.target.reset();
    }

    return (
        <>
            {film.length !== 0 && <button type="button">Go back</button>}
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
                        <Link to={`/Movies/${ film.id }`} className={s.navLinks}>{film.title}<span>Popularity</span>{film.vote_average}
                        </Link>
                    </li>)}
            </ul>
        </>

    )

}

export default MoviesPage;