'use strict';

// Constructor
var Activity = function() {
  this.name = 'activity';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Activity;
