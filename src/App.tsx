
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from './components/404/PageNotFound';
import RedirectToHome from './components/404/RedirectToHome';
import Blog from './components/layout/Blog';
import Main from './components/Main';

/**
 * App is the root React component.
 */
export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/sign-in" component={RedirectToHome} />
        <Route exact path="/sign-up" component={RedirectToHome} />
        <Route exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}
