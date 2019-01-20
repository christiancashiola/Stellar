import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';

const App = props => {
  return (
    <>
      <Route path='/' component={Splash} />
    </>
  )
};

export default App;