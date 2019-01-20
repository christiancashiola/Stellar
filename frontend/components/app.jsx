import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard_container';
import Nav from './nav/nav_container';

const App = () => {
  return (
    <>
      <Route path='/' component={Nav} />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' component={Splash} />
      </Switch>
    </>
  )
};

export default App;