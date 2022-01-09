// ------- Libraries ------------------------
// Using React for web rendering
import React from 'react';
import ReactDOM from 'react-dom';
// Using BrowserRouter for web routing
import { BrowserRouter } from 'react-router-dom'
// --------- Files ---------------------------
import App from './App';
// --------------- CSS ------------------------
// Using Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// My own styles
import './css/index.css'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

