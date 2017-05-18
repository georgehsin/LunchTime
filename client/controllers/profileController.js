myApp.controller('profileController', function($route, $scope, usersFactory, friendsFactory, $location, $cookies, $routeParams) {

	const index = function(){
		usersFactory.profile($routeParams.id).then((data)=>{
			$scope.self = data;
		});
	}
	index();

	$scope.add = function(send_id, recieve_id){
		const addInfo = {
			'send_id': send_id,
			'recieve_id': recieve_id
		}
		friendsFactory.add(addInfo).then((data)=>{
			index();
		});
	}
});