
import './App.css';
// import { NavLink } from 'react-router-dom'
import React from 'react';
import Navigation from '../src/components/Navigation/Navigation'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage'
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
import Casts from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <header><Navigation /></header>
      <hr />
      <Switch>
        <Route path='/' exact ><HomePage /></Route>
        <Route path='/Movies' exact><MoviesPage /></Route>
        <Route path='/Movies/:movieId' ><MovieDetailsPage /></Route>
        {/* <Route path='/Movies/:movieId/Casts' exact><Casts /></Route> */}
        {/* <Route path='/Movies/:movieId/Reviews' exact><Reviews /></Route> */}

        <Route><h1> 404 Page not found</h1></Route>
      </Switch>
    </>
  );
}

export default App;
