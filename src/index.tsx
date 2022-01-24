import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import { App } from './App';
import './css/index.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";

const root = document.querySelector("#root");
const element = React.createElement("h1",{},"Online Supermarket");

render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  root
);

