import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import Store from './redux/Store'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/index.css'
import './assets/css/theme.css'


import Layout from './components/layout/Layout'

document.title = 'Pomma Dashboard'

ReactDOM.render(
<Provider store={Store}>
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
