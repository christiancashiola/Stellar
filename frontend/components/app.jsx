import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import Dashboard from './dashboard/dashboard';
import Nav from './nav/nav_container';
import Modal from './modals/modal_container';
import Explore from './explore/explore';

const App = () => {
  return (
    <>
      <Modal />
      <Route path='/' component={Nav} />
      <AuthRoute exact path='/' component={Splash} />
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/explore' component={Explore} />
      </Switch>
    </>
  )
};

export default App;