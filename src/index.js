import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import './css/index.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import { Footer } from './components/layout/Footer';


ReactDOM.render(
  <React.StrictMode>
    <App props/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();