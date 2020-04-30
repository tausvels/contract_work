import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// ---- import components for ROUTING ----------------------------------------- //
import Home from './screens/home/Home';
import Products from './screens/products/Products';


function App() {
  // state is the overall STATE object that has sub states and can be found in the index.js of the reducer folder
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state);
  return (
    <Router>
      <Switch>
        <Route path='/products' render={ (routeProps) => <Products {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
        <Route path='/' render={ (routeProps) => <Home {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
      </Switch>
    </Router>
  );
}

export default App;
