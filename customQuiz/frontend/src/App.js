import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './App.css';
import { ProductProvider } from './context/ProductContext';
// ---- import components for ROUTING ----------------------------------------- //
import Home from './screens/home/Home';
import Products from './screens/products/Products';

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  // state is the overall STATE object that has sub states and can be found in the index.js of the reducer folder
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state);
  return (
    <Router>
      <ScrollToTop>
        <ProductProvider>
          <Route path='/products' render={ (routeProps) => <Products {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
          <Route path='/' render={ (routeProps) => <Home {...routeProps} allStates = {stateObj} dispatch = {dispatch} /> } ></Route>
        </ProductProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
