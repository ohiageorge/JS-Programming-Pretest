'use strict';

/* jasmine specs for controllers below*/
describe('taskApp:controllers', function() {

  describe('taskCtrl', function(){
    var scope, ctrl;

    beforeEach(module('taskApp'));

    beforeEach(inject(function($controller,_pouchDB_) {
		pouchdb = _pouchDB_;
      scope = {};
      ctrl = $controller('taskCtrl', {$scope:scope});
    }));
	it(' should save task to the db', function(){
	scope.addTask("Testing");
	var currTask = scope.fetchAllTask();
	expect(currTask.doc.title).toBe('Testing');
	
    });
	
  it('should have a task in pouchDb after saving item', function() {
    var task = "test";

    scope.addTask(task).then(function(result){
		 currTask = pouchDb.get(result.id);
	});
	expect(currTask.doc.title).toBe('test');
  });
  
	});
  });
