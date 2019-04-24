import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './home';

function Main() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
}

export default Main;
