(function () {
	/* Please note. It is not a good practice to code application business logic in the controller,
	* it is generally accepted to code application business logic in the model and inject into the controller
	* via a factory service.
	* but for the purpose of this test, i will code the business logic in the controller. please bear.
	*/
    'use strict';
    angular.module('taskApp', ['pouchdb'])
	.controller('taskCtrl', function ($scope, pouchDB) {
	    var db = new pouchDB('tasks'); // initialize pouchDB
		 $scope.tasks = [];
		 
		$scope.addTask = function (title) { // function to add task
		  var doc = {
			type: 'task',
			title: title,
			done: false,
			createdAt: new Date().getTime(),
			_id: new Date().toISOString()
		  };
		  db.put(doc)
		  .then(function (result) {
			 db.get(result.id)
			.then(function(task){
			  $scope.tasks.push({doc: task});
			})
			  .catch(function(err) {
			  $scope.err = err;
			})
		  });
		  $scope.title = '';
		  return true;
		};
		
		$scope.deleteTask = function (doc, index) { // function to delete a task
			  db.remove(doc)
			  .catch(function (error) {
				$scope.err = true;
				$scope.err.message = error;
			  })
			  .then(function () {
				$scope.tasks.splice(index, 1); // remove the tasks from view
			  });
		};
		
    $scope.editTask = function (task) {
      var doc = {
        title : task.doc.title,
        done : task.doc.done,
        editedAt : new Date().getTime()
      };

      db.put(doc, task.doc._id, task.doc._rev)
      .then(function () {
        task.editMode = false;
      });
    };
	
	 $scope.fetchAllTask = function () { // fetch all tasks
      db.allDocs({include_docs: true, descending: true})
      .then(function (result){
        $scope.tasks = result.rows;
      });
    };
	$scope.fetchAllTask(); // fetch all tasks on page start
	}
	);
})();