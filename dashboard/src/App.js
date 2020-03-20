import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import SignIn from './components/SighnIn/SignIn';
import { server } from './axios';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Route path='/' exact>
        <SignIn />
      </Route>
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
