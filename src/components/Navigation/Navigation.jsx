import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav >
            <ul className={s.list}>
                <li className={s.navLinks}>< NavLink exact to='/' className={s.navLinks} activeClassName={s.activLink}>Home</NavLink ></li>
                <li className={s.navLinks}>< NavLink to='/Movies' className={s.navLinks} activeClassName={s.activLink}>Movies</NavLink ></li>
            </ul>
        </nav>
    );
}

export default Navigation;