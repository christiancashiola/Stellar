import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import Dashboard from './dashboard/dashboard';
import Nav from './nav/nav_container';
import Modal from './modals/modal_container';

const App = () => {
  return (
    <>
      <Modal />
      <Route path='/' component={Nav} />
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <AuthRoute path='/' component={Splash} />
      </Switch>
    </>
  )
};

export default App;