'use strict';
module.exports = {
  url: function() {
    return this.api.launchUrl + '/';
  },
  elements: {
    title: {
      selector: 'h1:first-of-type'
    }
  }
};
