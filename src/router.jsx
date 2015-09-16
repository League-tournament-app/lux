'use strict';
import React from 'react';
import {Router, Route} from 'react-router';
import HomeRoute from './home/route';

export default <Router>
  <Route component={HomeRoute} path='/' />
</Router>;
