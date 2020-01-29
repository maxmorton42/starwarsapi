import React from 'react'
import Home from './components/Home'
import PeopleShow from './components/PeopleShow'
import './App.css'
import { Route, } from 'react-router-dom'

const App = () => (
  <>
  <Route exact path="/" component={Home} />
  <Route exact path="/person/:id" component={PeopleShow} />
  </>
);

export default App


