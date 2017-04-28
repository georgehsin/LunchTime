myApp.controller('profileController', function($route, $scope, usersFactory, $location, $cookies, $routeParams) {

	console.log($routeParams.id)
	var index = function(){
		console.log('gettin info')
		usersFactory.profile($routeParams.id, function(data){
			$scope.self = data;
		});
	}
	index();

	$scope.add = function(send_id, recieve_id){
		addInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		usersFactory.add(addInfo, function(){
		});
		index();
	}
});