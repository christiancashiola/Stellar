import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard_container';
import Nav from './nav/nav_container';

const App = () => {
  return (
    <>
      <Route path='/' component={Nav} />
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <AuthRoute path='/' component={Splash} />
      </Switch>
    </>
  )
};

export default App;