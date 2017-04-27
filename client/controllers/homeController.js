myApp.controller('homeController', function($scope, $location, $cookies) {

	$scope.user = $cookies.get('user')
	console.log($scope.user)
});