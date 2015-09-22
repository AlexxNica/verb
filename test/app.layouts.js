require('mocha');
require('should');
var assert = require('assert');
var verb = require('..');
var app;

describe('app', function () {
  beforeEach(function() {
    app = verb();
  });

  describe('add layouts', function () {
    it('should add layouts to `app.views.layouts`:', function () {
      app.layouts({
        'a.hbs': {path: 'a.hbs', contents: new Buffer('a')},
        'b.hbs': {path: 'b.hbs', contents: new Buffer('b')},
        'c.hbs': {path: 'c.hbs', contents: new Buffer('c')},
      });
      assert(Object.keys(app.views.layouts).length === 3);
    });
  });
});
