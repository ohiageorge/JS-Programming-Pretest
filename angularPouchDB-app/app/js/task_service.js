(function(){
	"use strict";
	
	angular.module('taskApp')
	.factory('taskService', function(pouchDB){
		var db = pouchDB('task');
			  return {
				  addTask: function(){
					var doc = {
					  type: 'todo',
					  title: todo.title,
					  done: false,
					  createdAt: new Date().getTime(),
					  _id: new Date().toISOString()
					};
					return db.put(doc)
					.then(function (response) {
					  return response;
					})
					.catch(function (error) {
					  return error;
					});
				  },
				  removeTask: function(){
					  
				  },
				  fetchTask: function(id){
					  
				  },
				  fetchAllTask(){
					  db.get('name')
						.then(function(res) {
						  // Update UI (almost) instantly
						  $scope.result = res;
						})
						.catch(function(err) {
						  $scope.err = err;
						}); 
				  }
			  }
	});
}())