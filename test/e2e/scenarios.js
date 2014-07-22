'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  describe('initial state', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should render have filter input', function() {
      expect(element(by.css('input.search')).length).toBeGreaterThan(0)
    });

  });


});
