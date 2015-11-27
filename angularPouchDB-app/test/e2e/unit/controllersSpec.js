'use strict';

/* jasmine specs for controllers below*/
describe('taskApp controllers', function() {

  describe('taskCtrl', function(){
    var scope, ctrl;

    beforeEach(module('taskApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('taskCtrl', {$scope:scope});
    }));
	
	   it('should add a task to browser indexDB via pouchDb "PUT" method', function() {
      expect(scope.addTask).toEqualData([]);
    });
	
  });
});
