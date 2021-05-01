import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/main/MainScreen';
import Account from '../components/main/account/Account';
import Analisis from '../components/main/analisis/Analisis';
import Offers from '../components/main/offers/Offers';
import Movements from '../components/main/movements/Movements';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/account' component={Account}></Route>
          <Route exact path='/analisis' component={Analisis}></Route>
          <Route exact path='/services' component={Offers}></Route>
          <Route exact path='/movements' component={Movements}></Route>
          <Route path='/auth' component={AuthRouter} />
          <Route exact path='/' component={MainScreen} />
          <Redirect to='auth/sign-in' />
        </Switch>
      </div>
    </Router>
  );
};
