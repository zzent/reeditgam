console.log ("#Gama: Cargo app.js");
var modulo1=
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.post = 
		[{title: "post 1", upvotes: 5},
		{title: "post 2", upvotes: 15},
		{title: "post 3", upvotes: 7},
		{title: "post 4", upvotes: 9},
		{title: "post 5", upvotes: 3},
		{title: "post 4", upvotes: 5}];

		//metodo de controlador
		$scope.addPost = function(){
			$scope.post.push(
				{title:"Nuevo Post",
				upvotes: 0});

		};

	}]);