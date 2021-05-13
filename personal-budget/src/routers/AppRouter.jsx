import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/pages/MainScreen';
import Account from '../components/pages/account/Account';
import Analisis from '../components/pages/analisis/Analisis';
import Offers from '../components/pages/offers/Offers';
import Movements from '../components/pages/movements/Movements';

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
