myApp.controller('profileController', function($route, $scope, usersFactory, friendsFactory, $location, $cookies, $routeParams) {

	var index = function(){
		usersFactory.profile($routeParams.id, function(data){
			$scope.self = data;
		});
	}
	index();

	$scope.add = function(send_id, recieve_id){
		var addInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		friendsFactory.add(addInfo, function(data){
			index();
		});
	}
});