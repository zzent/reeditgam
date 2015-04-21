console.log ("#Gama: Cargo app.js");
var modulo1=
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.post = ["post 1 hola","post 2","post 3","post 4","post 5"];

	}]);