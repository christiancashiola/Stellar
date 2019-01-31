import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import Dashboard from './dashboard/dashboard';
import Nav from './nav/nav_container';
import Modal from './modals/modal_container';
import ExploreSearch from './explore_search/explore_search';

const App = () => {
  return (
    <>
      <Modal />
      <Route path='/' component={Nav} />
      <AuthRoute exact path='/' component={Splash} />
      <Switch>
        <ProtectedRoute path='/search/:tag' component={ExploreSearch} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/explore' component={ExploreSearch} />
      </Switch>
    </>
  )
};

export default App;