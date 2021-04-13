
import './App.css';
import React from 'react';
import { QuantityProvider } from './context/QuantityContext';
import { Quantity } from './Quantity';
import { BrowserRouter as Router } from "react-router-dom";


/**
 * App is the root React component.
 */
export const App: React.FC<{}> = () => {
  return (
    <Router>
      <QuantityProvider>
        <Quantity />
      </QuantityProvider>
    </Router>
  );
}
