import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import s from './MoviesPage.module.css'
import * as api from '../../api/api';

export default function MoviesPage() {
    const location = useLocation();
    const history = useHistory();
    const [submitValue, setSubmitValue] = useState('')
    const [film, setFilm] = useState([])
    let params = new URLSearchParams(location.search);
    let query = params.get('query')

    useEffect(() => {
        if (submitValue !== "")
        {
            api.fetchMoviesSearch(submitValue).then(res => setFilm(res))
        }

    }, [submitValue])

    useEffect(() => {
        if (query !== null && query !== submitValue)
        {
            api.fetchMoviesSearch(query).then(res => setFilm(res));
        }
        // eslint-disable-next-line 
    }, [query])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitValue(evt.target.elements.inputName.value)
        // history.push(`/Movies/?query=${ evt.target.elements.inputName.value }`)
        history.push({
            pathname: location.pathname,
            search: `?query=${ evt.target.elements.inputName.value }`,
        })
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
                            state: { params: `/Movies/?query=${ query }` },

                        }} className={s.navLinks}>{film.title}
                        </Link>
                    </li>)}
            </ul>
        </>

    )

}

// export default MoviesPage;