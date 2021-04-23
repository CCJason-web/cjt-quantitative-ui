
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from './components/404/PageNotFound';
import Main from './components/Main';

/**
 * App is the root React component.
 */
export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
