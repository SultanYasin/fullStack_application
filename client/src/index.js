import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
   // should be stored in env file, but for now it is ok
    domain="dev-14pjtcb4.us.auth0.com"
    clientId="H41KE3EWRlsQhiox5lQ9nuW7nuQ4k5YN"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
 
);
