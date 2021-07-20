
import './App.css';
// import { NavLink } from 'react-router-dom'
// import HomePage from '../src/components/HomePage/HomePage'
import React from 'react';
import Navigation from '../src/components/Navigation/Navigation'
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <header><Navigation /></header>
      <hr />
      <Route path='/' exact >
        <HomePage />
      </Route>
    </>
  );
}

export default App;
