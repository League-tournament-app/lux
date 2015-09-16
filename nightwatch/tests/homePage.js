'use strict';

module.exports = {
  'should display logo': function(nightwatch) {
    const home = nightwatch.page.home();
    
    home.navigate().assert.containsText('@title', 'TournamentsGG');
    
    nightwatch.end();
  }
};
