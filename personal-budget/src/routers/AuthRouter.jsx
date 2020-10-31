import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignUp } from '../components/SignUp';
import { SignIn } from '../components/SignIn';
import { RecoverPass } from '../components/RecoverPass';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path='/auth/sign-in' component={SignIn} />
        <Route path='/auth/sign-up' component={SignUp} />
        <Route path='/auth/recover' component={RecoverPass} />
        <Redirect to='/auth/sign-in' />
      </Switch>
    </div>
  );
};
