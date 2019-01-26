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
      
      <ProtectedRoute path='/dashboard' component={Dashboard} />
      <AuthRoute exact path='/' component={Splash} />
    </>
  )
};

export default App;