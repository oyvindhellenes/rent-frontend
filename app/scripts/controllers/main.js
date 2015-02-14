'use strict';

angular.module('rentApp')
  .controller('MainCtrl', ['$scope', '$resource', function ($scope, $resource) {

  	var Equipment = $resource('http://127.0.0.1:8000/rent/api/');

  	Equipment.query(function(results){
  		console.log(results);
  	})
  }]);
