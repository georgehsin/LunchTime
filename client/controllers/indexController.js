myApp.controller('indexController', function($scope, $location, $cookies) {

	$scope.logout = function(){
		$cookies.remove('user');
		$cookies.remove('userId');
		$scope.user = null;
		$location.url('/login');
	}
	$scope.user = $cookies.get('user');
	$scope.userId = $cookies.get('userId');
});