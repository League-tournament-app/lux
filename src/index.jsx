'use strict';
import React from 'react';
import Router from 'react-router';
import Sitemap from './sitemap';

Router.run(Sitemap, Router.HistoryLocation, function(Handler) {
  const wrapper = document.getElementById('react');
  React.render(<Handler />, wrapper);
});
