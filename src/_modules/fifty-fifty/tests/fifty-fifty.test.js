'use strict';

var FiftyFifty = require('../fifty-fifty');

describe('FiftyFifty View', function() {

  beforeEach(function() {
    this.fiftyFifty = new FiftyFifty();
  });

  it('Should run a few assertions', function() {
    expect(this.fiftyFifty);
  });

});
