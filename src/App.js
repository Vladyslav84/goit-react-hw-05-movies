
import './App.css';
// import { NavLink } from 'react-router-dom'
// import HomePage from '../src/components/HomePage/HomePage'
import React from 'react';
import Navigation from '../src/components/Navigation/Navigation'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage'
function App() {
  return (
    <>
      <header><Navigation /></header>
      <hr />
     <Switch>
        <Route path='/' exact ><HomePage/></Route>
        <Route path='/Movies'><MoviesPage/></Route>
      <Route><h1> 404 Page not found</h1></Route>
     </Switch>
    </>
  );
}

export default App;