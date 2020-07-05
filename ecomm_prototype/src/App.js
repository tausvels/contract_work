import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { GeneralProvider } from './contexts/GeneralContext';
import { TestContextProvider } from './contexts/TestContext';
// ---- import components for ROUTING ----------------------------------------- //
import About from './screens/about/About';
import Home from './screens/home/Home';
import Test from './screens/Test/Test';


function App() {
  // state is the overall STATE object that has sub states and can be found in the index.js of the reducer folder
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state);
  return (
    <Router>
      <Switch>
        <GeneralProvider>
          <TestContextProvider>
            <Route path='/about' render={ (routeProps) => <About {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
            <Route path='/test' render={ (routeProps) => <Test {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
            <Route exact path='/' render={ (routeProps) => <Home {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
          </TestContextProvider>
        </GeneralProvider>
      </Switch>
    </Router>
  );
}

export default App;
