import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// ---- import symentic-ui css -------------------------- //
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import './index.css';
// ---- import all the states from the reducer file ----- //
import allReducers from './reducers';
import * as serviceWorker from './serviceWorker';






if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store = {store}> {/** passing all the states as store to all the components of app */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
