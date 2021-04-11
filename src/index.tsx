import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import {App} from './App';
import './css/index.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
