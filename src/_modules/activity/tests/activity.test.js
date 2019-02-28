'use strict';

var Activity = require('../activity');

describe('Activity View', function() {

  beforeEach(function() {
    this.activity = new Activity();
  });

  it('Should run a few assertions', function() {
    expect(this.activity);
  });

});
