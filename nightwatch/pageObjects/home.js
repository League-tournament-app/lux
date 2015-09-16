'use strict';
module.exports = {
  url: function() {
    return this.api.launchUrl + '/login';
  },
  elements: {
    title: {
      selector: 'h1:first-of-type'
    }
  }
};
