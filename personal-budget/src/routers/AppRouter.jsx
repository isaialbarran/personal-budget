import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/MainScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={AuthRouter} />
          <Route exact path='/' component={MainScreen} />
          <Redirect to='auth/sign-in' />
        </Switch>
      </div>
    </Router>
  );
};
