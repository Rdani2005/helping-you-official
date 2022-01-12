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

// Settings for auth0
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(domain, clientID);
ReactDOM.render(
  // Configuring the auth provider
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

//TODO: Create an About page
