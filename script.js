var myModule = angular.module("myModule", [])

myModule.controller("myController", function($scope){
	var employees = [
	{
		firstName: "David", lastName: "Hastings", gender: "Male"},
		{firstName: "Prescilla", lastName: "Hastings", gender: "Lady"},
		{firstName: "Keith", lastName: "Stoople", gender: "Lady"},
		{firstName: "Doodle", lastName: "Drape", gender: "Dude"},
		{firstName: "Scopy", lastName: "Hoople", gender: "Guy"},
		{firstName: "Lala", lastName: "Winky", gender: "Lady"}
		]
	var mood = {
		name: "Happy",
		face: "smile",
		image: "img/happy.png"

	}
	$scope.employees = employees
	$scope.mood = mood
	$scope.addEmployee = function(){
		$scope.employees.push(
		{
			firstName: $scope.newEmployee.firstName,
			lastName: $scope.newEmployee.lastName,
			gender: $scope.newEmployee.gender,

		})
	}
	});