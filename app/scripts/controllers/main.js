'use strict';

angular.module('rentApp')
  .controller('MainCtrl', ['$scope', '$resource', function ($scope, $resource) {

  	var Equipment = $resource('http://127.0.0.1:8000/rent/api/equipment/');

  	$scope.form = {
  		type: "",
  		description: "",
  		location: ""
  	}

  	$scope.equipment = {};
  	Equipment.query(function(results){
  		$scope.equipment = results;
  	})

  	$scope.addEquipment = function(){
  		var equipment = new Equipment()
  		equipment.type = $scope.form.type;
  		equipment.description = $scope.form.description;
  		equipment.location = $scope.form.location;

  		console.log('test' +  $scope.form.type);

  		equipment.$save().then(function(results){
  			console.log(results);
  		})
  	}
  }]);
