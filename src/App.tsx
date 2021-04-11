
import './App.css';
import React from 'react';
import { QuantityProvider } from './context/QuantityContext';
import { Quantity } from './Quantity';

/**
 * App is the root React component.
 */
export const App: React.FC<{}> = () => {
  return (
    <QuantityProvider>
      <Quantity />
    </QuantityProvider>
  );
}
