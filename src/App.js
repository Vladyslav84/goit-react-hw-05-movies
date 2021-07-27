
import './App.css'
import { lazy, Suspense } from 'react'
import React from 'react';
import Navigation from '../src/components/Navigation/Navigation'
import { Route, Switch, Redirect } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage'
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'

const HomePage = lazy(() => import('./components/HomePage/HomePage.jsx' /* webpackChunkName: "HomePage" */));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "MoviesPage" */));
// const MovieDetailsPage = lazy(() => ('./components/MovieDetailsPage/MovieDetailsPage.jsx'));

function App() {
  return (
    <>
      <header><Navigation /></header>
      <hr />
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/' exact ><HomePage /></Route>
          <Route path='/Movies' exact><MoviesPage /></Route>
          <Route path='/Movies/:movieId' ><MovieDetailsPage /></Route>
          <Route><h1> 404 Page not found</h1></Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

// eslint-disable-next-line 